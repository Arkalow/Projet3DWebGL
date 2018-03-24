function Menu(text){

    var px = 50
    var canvas = document.createElement("canvas")
    var contextCanvas = canvas.getContext("2d")
    canvas.width = canvas.height = 10*px
    contextCanvas.shadowColor = "#000"
    contextCanvas.shadowBlur = 7

    //Fond
    contextCanvas.fillStyle = '#E1E1E1';
    contextCanvas.fillRect(0, 0, canvas.height, canvas.width);

    //Text
    contextCanvas.fillStyle = "black"
    contextCanvas.font = (px*0.8)+"pt arial bold"
    addMultiLineText(text, 0, px, px, canvas.width, contextCanvas);
    
    var geometry = new THREE.PlaneGeometry(1, 1, 1)

    var material = new THREE.MeshBasicMaterial({ 
        map: new THREE.Texture(canvas), 
        transparent: false,
        //color: 0x00FF00,
        side : THREE.DoubleSide
    })

    material.map.needsUpdate = true
    this.__proto__ = new THREE.Mesh(geometry, material)
    this.rotation.canvas = Math.PI * 90 / 180
    this.doubleSided = true
    this.position.set(0, 0, -2)

    console.log(this)
}