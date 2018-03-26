var container; 
var scene, renderer;
var dax=0.002;
var pers = new Personnage();
var map = new Map('../TranseptSud/TranseptTexture4096.jpg', '../TranseptSud/transeptSudBox.obj');
var balises = new Array()
var touches = []
var input = ""
// Gestion du clavier
window.onkeydown = function(event) {
    var e = event || window.event;
    var key = e.which || e.keyCode;

    if(touches.indexOf(key) < 0) {
        touches.push(key);
    }
    if(e.keyCode < 91 && e.keyCode > 65 || e.keyCode == 32){
        if(input == ""){
            input = event.key
        }
    }
    console.log(e.keyCode)
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

    /**
     * Lumière global (Pour les tests)
     */
    // var light = new THREE.AmbientLight();
    // scene.add(light)
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);

    var balise = new Balise(7, 4, "君はベッドの内に寝る\n\n Où es tu ?\n\n=>")
    balise.position.x = 4.9
    balise.position.y = 20.3
    balises.push(balise)
    balises.forEach(balise => {
        map.add(balise)
    });
}

/**
 * Déplacement du personnage
 */
function move(){
    if(touches.indexOf(220) >= 0){//<>
        pers.rotate(1)
    }
    if(touches.indexOf(87) >= 0){//w
        pers.rotate(-1)
    }
    if(touches.indexOf(16) >= 0){ //Shift
        console.log("x : " + pers.position.x + "| y : " + pers.position.y)
        if(touches.indexOf(38) >= 0){//haut
            pers.headUp();
        }
        if(touches.indexOf(40) >= 0){//bas
            pers.headDown();
        }
    }else{ //pas shift
        if(touches.indexOf(38) >= 0){//haut
            pers.forward(map)
        }
        if(touches.indexOf(40) >= 0){//bas
            pers.backward(map)
        }
    }
    if(touches.indexOf(37) >= 0){//gauche
        pers.leftward(map)
    }
    if(touches.indexOf(39) >= 0){//droite
        pers.rightward(map)
    }
}

function collision(){
    balises.forEach(balise => {
        if(balise.isCollision(pers.position) == true){ //Si le joueur est sur une balise
            if(pers.enable == true && balise.actif == false){
                pers.enable = false
                pers.menu.visible = true
                balise.actif = true
                pers.menu.text = balise.text
            }
        }else{
            balise.actif = false
        }
    })
}
function Afficher() {
    renderer.render(scene,pers.camera);
}

function Animer() {
    requestAnimationFrame(Animer);
    if(pers.enable == true){
        if(touches.length > 0){
            move()
            collision()
        }
    }else{
        if(touches.indexOf(13) >= 0){//Enter
            if(pers.menu.visible){
                pers.menu.visible = false
                pers.enable = true
            }
        }else if(touches.indexOf(8) >= 0){
            if(pers.menu.text.length > 0){
                pers.menu.text = pers.menu.text.substring(0, pers.menu.text.length-1)
                pers.menu.setText(pers.menu.text)
            }
        }else{
            if(input != ""){
                pers.menu.text += input
                input = ""
            }else
            pers.menu.setText(pers.menu.text)
        }
    }
    Afficher();
}

Init();
Animer();
