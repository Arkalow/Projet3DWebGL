var container; 
var scene, renderer;
var dax=0.002;
var pers = new Personnage();

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

            // Gestion du clavier
window.onkeydown = function(event) {
    var e = event || window.event;
    var key = e.which || e.keyCode;
    switch(key) {
    case 38 : //haut
        pers.move(0, pers.speed, 0);
        break;
    case 40 : //bas
        pers.move(0, -pers.speed, 0);
        break;
    case 37 : //gauche
        pers.move(-pers.speed, 0, 0);
        break;
    case 39 : //droite
        pers.move(pers.speed, 0, 0);
        break;
    }
}

function Afficher() {
    renderer.render(scene,pers.camera);
}

function Animer() {
    requestAnimationFrame(Animer);
    
    Afficher();
}

Init();
Animer();
