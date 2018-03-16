function Personnage(){
    this.__proto__ = new THREE.Object3D

    /**
     * Position
     */
    this.rotation.x = Math.PI * 90 / 180
    this.position.set(0, 0, 0)
    this.speedMove = 0.07
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
    /**
     * Rotation
     */
    this.rotate = function(yRotation){
        this.rotation.y += yRotation
    }
    
    console.log(this)
}