var container; 
var scene, renderer;
var dax=0.002;
var pers = new Personnage();

var touches = []
// Gestion du clavier
window.onkeydown = function(event) {
    var e = event || window.event;
    var key = e.which || e.keyCode;

    if(touches.indexOf(key)<0) {
        touches.push(key);
    }
}
window.onkeyup = function(event) {
    var e = event || window.event;
    var key = e.which || e.keyCode;

    index = touches.indexOf(key)
    if(index>=0) {
      touches.splice(index,1);
    }
}
function onWindowResize() {
    pers.camera.aspect = window.innerWidth / window.innerHeight;
    pers.camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function Init() {
    container = document.createElement('div');
    document.body.appendChild(container);

    /***
     * Scene
     */
    scene = new THREE.Scene();

    

    /***
     * Texture
     */
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
    };
    var texture = new THREE.Texture();

    var loader = new THREE.ImageLoader(manager);
    loader.load('../TranseptSud/TranseptTexture4096.jpg', function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    /***
     * Chargement du modèle
     */
    var loader = new THREE.OBJLoader(manager);
    loader.load('../TranseptSud/transeptSudBox.obj', function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });
        object.position.z = 20 //on place le sol de la salle à 0 aproximatif
        scene.add(object)
    });

    scene.add(pers)//Ajout du personnage à la scene

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
}

/**
 * Déplacement du personnage
 */
function move(){

    /***
     * Rotation
     */
    if(touches.indexOf(220) >= 0){//<>
        pers.rotate(0, 1)
    }
    if(touches.indexOf(87) >= 0){//w
        pers.rotate(0, -1)
    }
    if(touches.indexOf(16) >= 0){ //Shift
        if(touches.indexOf(38) >= 0){//haut
            pers.rotate(1, 0);
        }
        if(touches.indexOf(40) >= 0){//bas
            pers.rotate(-1, 0);
        }
    }else{ //pas shift
        if(touches.indexOf(38) >= 0){//haut
            pers.forward()
        }
        if(touches.indexOf(40) >= 0){//bas
            pers.backward()
        }
    }
    if(touches.indexOf(37) >= 0){//gauche
        pers.leftward()
    }
    if(touches.indexOf(39) >= 0){//droite
        pers.rightward()
    }
}

function Afficher() {
    renderer.render(scene,pers.camera);
}

function Animer() {
    requestAnimationFrame(Animer);
    move();
    Afficher();
    // console.log("x : " + pers.position.x + "| y : " + pers.position.y)
}

Init();
Animer();
