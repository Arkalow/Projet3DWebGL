function Balise(tailleX, tailleY, text){
    this.text = "君はベッドの内に寝る"
    this.tailleX = tailleX
    this.tailleY = tailleY
    var geometry = new THREE.CubeGeometry(this.tailleX,this.tailleY , 0.01)
    var material = new THREE.MeshBasicMaterial( {color: 0x635900} )
    this.__proto__ = new THREE.Mesh(geometry, material)
    this.position.z = -1
    this.actif = false

    this.light = new THREE.PointLight(0xF1DA00, 0.5, 20)
    this.add(this.light)

    this.isCollision = function(position){
        if(position.x < this.position.x + tailleX/2 && position.x > this.position.x - this.tailleX/2 && position.y < this.position.y + tailleY/2 && position.y > this.position.y - this.tailleY/2 ){
            return true
        }else{
            return false
        }
    }
    console.log(this)
}