function Balise(tailleX, tailleY){
    this.tailleX = tailleX
    this.tailleY = tailleY
    var geometry = new THREE.CubeGeometry(this.tailleX,this.tailleY , 0.01)
    var material = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
    this.__proto__ = new THREE.Mesh(geometry, material)
    this.position.z = -1

    this.isCollision = function(position){
        if(position.x < this.position.x && position.x > this.position.x -  this.tailleX && position.y < this.position.y && position.y > this.position.y - this.tailleY ){
            return true
        }else{
            return false
        }
    }
    console.log(this)
}