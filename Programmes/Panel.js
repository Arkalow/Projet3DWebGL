function Panel(){

    var canvas = document.createElement("canvas");
    var contextCanvas = canvas.getContext("2d");
    canvas.width = canvas.height = 128;
    contextCanvas.shadowColor = "#000";
    contextCanvas.shadowBlur = 7;
    contextCanvas.fillStyle = "white";
    contextCanvas.font = "30pt arial bold";
    contextCanvas.fillText('Test', 10, 64);

    var geometry = new THREE.PlaneGeometry(5, 5, 1)

    var material = new THREE.MeshBasicMaterial({ 
        map: new THREE.Texture(canvas), 
        transparent: true,
        //color: 0x00FF00,
        side : THREE.DoubleSide
    });

    material.map.needsUpdate = true;
    this.__proto__ = new THREE.Mesh(geometry, material)
    this.rotation.canvas = Math.PI * 90 / 180
    this.doubleSided = true;
    this.position.set(0, 0, 0)

    console.log(this)
}