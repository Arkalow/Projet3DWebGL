function Personnage(){
    this.__proto__ = new THREE.Object3D

    /**
     * Position
     */
    this.rotation.x = Math.PI * 90 / 200
    this.position.set(0, 0, 0)

    /**
     * Camera
     */
    this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 2000);
    this.add(this.camera)

    /**
     * Lumière
     */
    // this.ambient = new THREE.AmbientLight(0x222222);
    // this.add(this.ambient);
    // console.log(this.ambient)
    this.light = new THREE.PointLight(0xF1DA00, 0.4, 30);
    this.add(this.light)
                

    console.log(this)   
}