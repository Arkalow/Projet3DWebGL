function Personnage(){
    this.__proto__ = new THREE.Object3D

    this.x = 0
    this.y = 0
    this.z = 0
    this.position.x = 0
    this.position.y = 0
    this.position.z = 0
    this.rotation.x = Math.PI * 90 / 200
    this.rotation.y = 0
    this.rotation.z = 0



    this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 2000);

    this.__proto__.add(this.camera)
    this.position.set(3, 0, -15)
    console.log(this)
    
}