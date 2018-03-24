function Object(){
    
    var geometry = new THREE.CubeGeometry(2,2,4)
    var material = new THREE.MeshBasicMaterial( {color: 0xA22800} );
    this.__proto__ = new THREE.Mesh(geometry, material)
    this.cube.position.set(0, 0, 0)
    this.add(this.cube);
    console.log(this)
}