var container; 
var scene, renderer;
var dax=0.002;
var pers = new Personnage();
var map = new Map('../TranseptSud/TranseptTexture4096.jpg', '../TranseptSud/transeptSudBox.obj');
var balises = new Array()
var touches = []
var input = undefined
// Gestion du clavier
window.onkeydown = function(event) {
    var e = event || window.event;
    var key = e.which || e.keyCode;

    if(touches.indexOf(key) < 0) {
        touches.push(key);
    }
    if(input != undefined){
        input += event.key
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

    /**
     * Lumière global (Pour les tests)
     */
    // var light = new THREE.AmbientLight();
    // scene.add(light)
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);

    var balise = new Balise(7, 4)
    balise.position.x = 4.9
    balise.position.y = 20.3
    balises.push(balise)
    balises.forEach(balise => {
        map.add(balise)
    });


    
    /**
     * Indices
     */
    var indices = new Array()

    //Indice 1
    indices.push(new Panel("wcvxwcv dfsdf sdf sdf sdf sdf sdf xcvxcvv sddf sdqsd", 20, 30, 50, 2))
    indices[0].transparent = true
    indices[0].rotation.x = Math.PI * 90 / 180
    indices[0].rotation.y = Math.PI * 90 / 180
    indices[0].translateX(11)
    indices[0].translateY(4)
    indices[0].translateZ(-1.2)

    //Indice 2
    indices.push(new Panel("wcvxwcv dfsdf sdf sdf sdf sdf sdf xcvxcvv sddf sdqsd", 20, 30, 50, 2))
    indices[1].transparent = true
    indices[1].rotation.x = Math.PI * 90 / 180
    indices[1].rotation.y = Math.PI * 90 / 180
    indices[1].translateX(10)
    indices[1].translateY(8)
    indices[1].translateZ(-1.2)

    //Indice 3
    indices.push(new Panel("wcvxwcv dfsdf sdf sdf sdf sdf sdf xcvxcvv sddf sdqsd", 20, 30, 50, 2))
    indices[2].transparent = true
    indices[2].rotation.x = Math.PI * 90 / 180
    indices[2].rotation.y = Math.PI * 90 / 180
    indices[2].translateX(3.5)
    indices[2].translateY(8)
    indices[2].translateZ(-1.2)

    //Indice 4
    indices.push(new Panel("wcvxwcv dfsdf sdf sdf sdf sdf sdf xcvxcvv sddf sdqsd", 22, 19, 50, 2))
    indices[3].transparent = true
    indices[3].rotation.x = Math.PI * 90 / 180
    indices[3].rotation.y = Math.PI * 90 / 180
    indices[3].translateX(7.4)
    indices[3].translateY(2.5)
    indices[3].translateZ(-1.2)

    //Indice 5
    indices.push(new Panel("wcvxwcv dfsdf sdf sdf sdf sdf sdf xcvxcvv sddf sdqsd", 40, 50, 50, 2))
    indices[4].transparent = true
    indices[4].rotation.x = Math.PI * 90 / 180
    indices[4].rotation.y = Math.PI * -90 / 180
    indices[4].translateX(-11.2)
    indices[4].translateY(5)
    indices[4].translateZ(-10.6)

    //Indice 6
    indices.push(new Panel("wcvxwcv dfsdf sdf sdf sdf sdf sdf xcvxcvv sddf sdqsd", 40, 48, 50, 2))
    indices[5].transparent = true
    indices[5].rotation.x = Math.PI * 90 / 180
    indices[5].rotation.y = Math.PI * -90 / 180
    indices[5].translateX(-3.1)
    indices[5].translateY(5)
    indices[5].translateZ(-10.6)
    










    indices.forEach(indice => {
        map.add(indice)
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
            if(pers.enable == true){
                pers.enable = false
                pers.menu.visible = true
            }
        }
    })
}
function Afficher() {
    renderer.render(scene,pers.camera);
}

function Animer() {
    requestAnimationFrame(Animer);
    if(touches.length > 0){
        if(pers.enable == true){
            move()
        }
        collision()

        if(touches.indexOf(13) >= 0){//Enter
            if(pers.menu.visible){
                pers.menu.visible = false
                pers.enable = true
            }
        }
    }
    Afficher();
}

Init();
Animer();
