function Balise(){

    var geometry = new THREE.CubeGeometry(2,4,2)
    var material = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
    this.__proto__ = new THREE.Mesh(geometry, material)

    console.log(this)
}