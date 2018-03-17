function Personnage(){
    this.__proto__ = new THREE.Object3D

    /**
     * Position
     */
    this.rotation.x = Math.PI * 90 / 180
    this.position.set(0, 0, -20)
    this.speedMove = 1
    this.speedRotate = 0.09

    /**
     * Camera
     */
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
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
     * Rotation horizontale
     */
    this.rotate = function(x, y){
        this.rotation.y += y
        this.camera.rotation.x += x
    }

    /**
     * Bras du personnage
     */
    var geometry = new THREE.CubeGeometry(0.5,1,0.5)
    var material = new THREE.MeshBasicMaterial( {color: 0xd1d1d1} );
    var leftArm = new THREE.Mesh(geometry, material)
    var rightArm = new THREE.Mesh(geometry, material)
    leftArm.position.set(-1.5, -1, -3)
    leftArm.rotation.set(1, 1, 1)
    rightArm.position.set(1.5, -1, -3)
    rightArm.rotation.set(1, -1, -1)
    this.add(leftArm);
    this.add(rightArm);

    console.log(this)
}