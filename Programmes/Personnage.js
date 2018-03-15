function Personnage(){
    this.__proto__ = new THREE.Object3D

    this.rotation.x = Math.PI * 90 / 200

    this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 2000);

    this.__proto__.add(this.camera)
    this.position.set(0, 0, 0)
    console.log(this)
    
}