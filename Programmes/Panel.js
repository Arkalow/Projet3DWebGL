function Panel(text, height, width, resolution, police){
    
    this.police = police
    this.px = resolution
    this.canvas = document.createElement("canvas")
    this.contextCanvas = this.canvas.getContext("2d")
    this.canvas.height = height * this.px
    this.canvas.width = width * this.px
    this.contextCanvas.shadowColor = "#000"
    this.contextCanvas.shadowBlur = 7
    this.background =  '#252000'
    this.color = 'black'
    

    this.setText = function(text){
        //Fond
        this.contextCanvas.fillStyle = this.background
        this.contextCanvas.fillRect(0, 0, this.canvas.width, this.canvas.height);

        //Text
        this.contextCanvas.fillStyle = this.color
        this.contextCanvas.font = (this.px*this.police)+"pt arial bold"

        material.map.needsUpdate = true
        addMultiLineText("\n"+text, this.px*this.police, this.px*this.police, this.px*this.police, this.canvas.width - this.px*this.police, this.contextCanvas);
    }
    
    var geometry = new THREE.PlaneGeometry(width/10, height/10, 1)
    var material = new THREE.MeshBasicMaterial({ 
        map: new THREE.Texture(this.canvas), 
        transparent: false,
        //color: 0x00FF00,
        //side : THREE.DoubleSide
    })
    this.setText(text)
    this.__proto__ = new THREE.Mesh(geometry, material)
    this.doubleSided = true
    this.position.set(0, 0, 0)
    
    console.log(this)
}