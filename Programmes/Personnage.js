function Personnage(){
    THREE.Object3D.call(this);

    this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 2000);
    this.camera.rotation.z=0;
    this.camera.rotation.x=0;
    this.camera.rotation.y=0;
    this.camera.position.z=0;
    console.log(this)
    
}