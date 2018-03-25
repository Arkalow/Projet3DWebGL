function Balise(){

    var geometry = new THREE.CubeGeometry(2.9, 2, 0.01)
    var material = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
    this.__proto__ = new THREE.Mesh(geometry, material)
    this.position.x = 5.8
    this.position.y = 20.3
    this.position.z = -1
    console.log(this)
}