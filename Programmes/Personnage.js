function Personnage(){
    this.__proto__ = new THREE.Object3D

    /**
     * Position
     */
    this.rotation.x = Math.PI * 90 / 180
    this.position.set(0, 0, 0)
    this.speedMove = 0.08
    this.speedRotate = 0.09

    /**
     * Camera
     */
    this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 2000);
    this.add(this.camera)

    /**
     * Lumière
     * argument : color, intensity, distance
     */
    this.light = new THREE.PointLight(0xF1DA00, 0.5, 30);
    this.add(this.light)
                
    /**
     * move
     */
    this.move = function(x, y, z){
        this.position.x += x
        this.position.y += y
        this.position.z += z
    }
    this.forward = function(){
        this.position.x += -Math.cos((Math.PI * 90/180) - this.rotation.y) * this.speedMove
        this.position.y += Math.cos(this.rotation.y) * this.speedMove
        this.position.y += 0
    }
    this.backward = function(){
        this.position.x += Math.cos((Math.PI * 90/180) - this.rotation.y) * this.speedMove
        this.position.y += -Math.cos(this.rotation.y) * this.speedMove
        this.position.y += 0
    }
    this.leftward = function(){
        this.position.x += -Math.cos(this.rotation.y) * this.speedMove
        this.position.y += -Math.cos((Math.PI * 90/180) - this.rotation.y) * this.speedMove
        this.position.y += 0
    }
    this.rightward = function(){
        this.position.x += Math.cos(this.rotation.y) * this.speedMove
        this.position.y += Math.cos((Math.PI * 90/180) - this.rotation.y) * this.speedMove
        this.position.y += 0
    }

    /**
     * Rotation horizontale
     */
    this.rotate = function(x, y){
        this.rotation.y += y * this.speedRotate
        this.camera.rotation.x += x * this.speedRotate
    }
    
    console.log(this)
}