var container; 
var scene, renderer;
var dax=0.002;
var pers = new Personnage();
var map = new Map('../TranseptSud/TranseptTexture4096.jpg', '../TranseptSud/transeptSudBox.obj');

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
    map.add(pers)
    scene.add(map);

    // var light = new THREE.AmbientLight();
    // scene.add(light)
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
}

/**
 * Déplacement du personnage
 */
function move(){
    if(touches.indexOf(38) >= 0){//haut
        pers.move(
            -Math.cos((Math.PI * 90/180) - pers.rotation.y) * pers.speedMove, 
            Math.cos(pers.rotation.y) * pers.speedMove,
            0
        )
    }
    if(touches.indexOf(40) >= 0){//bas
        pers.move(
            Math.cos((Math.PI * 90/180) - pers.rotation.y) * pers.speedMove, 
            -Math.cos(pers.rotation.y) * pers.speedMove,
            0
        )
    }
    if(touches.indexOf(37) >= 0){//gauche
        pers.move(
            -Math.cos(pers.rotation.y) * pers.speedMove, 
            -Math.cos((Math.PI * 90/180) - pers.rotation.y) * pers.speedMove,
            0
        )
    }
    if(touches.indexOf(39) >= 0){//droite
        pers.move(
            Math.cos(pers.rotation.y) * pers.speedMove, 
            Math.cos((Math.PI * 90/180) - pers.rotation.y) * pers.speedMove,
            0
        )
    }

    /***
     * Rotation
     */
    if(touches.indexOf(220) >= 0){
        pers.rotate(0, pers.speedRotate)
    }
    if(touches.indexOf(87) >= 0){
        pers.rotate(0, -pers.speedRotate)
    }
    if(touches.indexOf(16) >= 0){
        if(touches.indexOf(38) >= 0){//haut
            pers.rotate(pers.speedRotate, 0);
        }
        if(touches.indexOf(40) >= 0){//bas
            pers.rotate(-pers.speedRotate, 0);
        }
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
