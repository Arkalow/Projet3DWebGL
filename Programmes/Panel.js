function Panel(){
    this.__proto__ = new THREE.Object3D

    var geometry = new THREE.PlaneGeometry(5 ,20 ,4)
    var material = new THREE.MeshBasicMaterial( {color: 0xA22800, side : THREE.DoubleSide} );
    this.plane = new THREE.Mesh(geometry, material)
    this.cube.position.set(0, 0, 0)
    this.add(this.cube);
    console.log(this)
}