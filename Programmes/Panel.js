function Panel(){

    var x = document.createElement("canvas");
    var xc = x.getContext("2d");
    x.width = x.height = 128;
    xc.shadowColor = "#000";
    xc.shadowBlur = 7;
    xc.fillStyle = "white";
    xc.font = "30pt arial bold";
    xc.fillText('Test', 10, 64);

    var geometry = new THREE.PlaneGeometry(5, 5, 1)

    var material = new THREE.MeshBasicMaterial({ 
        map: new THREE.Texture(x), 
        transparent: true,
        //color: 0x00FF00,
        side : THREE.DoubleSide
    });

    material.map.needsUpdate = true;
    this.__proto__ = new THREE.Mesh(geometry, material)
    this.rotation.x = Math.PI * 90 / 180
    this.doubleSided = true;
    this.position.set(0, 0, 0)

    console.log(this)
}