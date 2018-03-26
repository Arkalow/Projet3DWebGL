function Personnage(){

    this.enable = true
    var geometry = new THREE.CubeGeometry(2,4,2)
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    this.__proto__ = new THREE.Mesh(geometry, material)
    /**
     * Position
     */
    this.rotation.x = Math.PI * 90 / 180
    this.position.set(0, 0, 0)
    this.speedMove = 0.3
    this.speedRotate = 0.09

    /**
     * Camera
     */
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.y = 1
    this.add(this.camera)

    /**
     * Lumière
     * argument : color, intensity, distance
     */
    this.light = new THREE.PointLight(0xF1DA00, 1, 20);
    this.add(this.light)

    this.forward = function(map){
        var position = new THREE.Vector3()
        position.x = this.position.x - Math.cos((Math.PI * 90/180) - this.rotation.y) * this.speedMove
        position.y = this.position.y + Math.cos(this.rotation.y) * this.speedMove
        position.z += 0
        if(map.isOn(position) == true){
            this.position = position
        }
    }
    this.backward = function(map){
        var position = new THREE.Vector3()
        position.x = this.position.x + Math.cos((Math.PI * 90/180) - this.rotation.y) * this.speedMove
        position.y = this.position.y - Math.cos(this.rotation.y) * this.speedMove
        position.z += 0
        if(map.isOn(position) == true){
            this.position = position
        }
    }
    this.leftward = function(map){
        var position = new THREE.Vector3()
        position.x = this.position.x - Math.cos(this.rotation.y) * this.speedMove
        position.y = this.position.y - Math.cos((Math.PI * 90/180) - this.rotation.y) * this.speedMove
        position.z += 0
        if(map.isOn(position) == true){
            this.position = position
        }
    }
    this.rightward = function(map){
        var position = new THREE.Vector3()
        position.x += this.position.x + Math.cos(this.rotation.y) * this.speedMove
        position.y += this.position.y + Math.cos((Math.PI * 90/180) - this.rotation.y) * this.speedMove
        position.z += 0
        if(map.isOn(position) == true){
            this.position = position
        }
    }

    /**
     * Rotation horizontale
     */
    this.rotate = function(y){
        this.rotation.y += y * this.speedRotate
    }
    this.headUp = function(){
        if(this.camera.rotation.x < 1.30){
            this.camera.rotation.x += this.speedRotate
        }
    }
    this.headDown = function(){
        if(this.camera.rotation.x >= -0.30){
            this.camera.rotation.x -= this.speedRotate
        }
    }

    /**
     * Bras du personnage
     */
    // var geometry = new THREE.CubeGeometry(0.5,1.5,0.5)
    // var material = new THREE.MeshBasicMaterial( {clor: 0xd1d1d1} );
    // var leftArm = new THREE.Mesh(geometry, material)
    // var rightArm = new THREE.Mesh(geometry, material)
    // leftArm.position.set(-1.5, -0.5, -2)
    // leftArm.rotation.set(1, 1.3, 1)
    // rightArm.position.set(1.5, -0.5, -2)
    // rightArm.rotation.set(1, -1.3, -1)
    // this.add(leftArm);
    // this.add(rightArm);


    /**
     * Paneau lié au personnage
     */
    this.menu = new Panel("私は駅に車で行。", 9, 15, 60, 0.6)
    this.menu.position.z = -1.5
    this.menu.visible = false
    this.camera.add(this.menu)

    console.log(this)
}