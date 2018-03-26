function Map(imageURL, objectURL){
    this.__proto__ = new THREE.Object3D
    var self = this
    /***
     * Texture
     */
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
    };
    var texture = new THREE.Texture();

    var loader = new THREE.ImageLoader(manager);
    loader.load(imageURL, function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    /***
     * Chargement du modèle
     */
    var loader = new THREE.OBJLoader(manager);
    loader.load(objectURL, function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
            object.position.set(4.7, -10, 21)
            object.position.y += 20
        });
        self.add(object)
    });
    console.log(this)

    /**
     * Détecte si la position passé en paramètre est dans la map
     * @param {*} position 
     */
    this.isOn = function(position){
        if(position.x <= 9 && position.x >= 0 && position.y <= 20 && position.y >= 0){
            return true
        }
        return true
    }
    
    /**
     * Indices
     */
    var indices = new Array()

    //Indice 1
    indices.push(new Panel("wcvxwcv dfsdf sdf sdf sdf sdf sdf xcvxcvv sddf sdqsd", 20, 30, 50, 2))
    indices[0].transparent = true
    indices[0].rotation.x = Math.PI * 90 / 180
    indices[0].rotation.y = Math.PI * 90 / 180
    indices[0].translateX(11)
    indices[0].translateY(4)
    indices[0].translateZ(-1.2)

    //Indice 2
    indices.push(new Panel("wcvxwcv dfsdf sdf sdf sdf sdf sdf xcvxcvv sddf sdqsd", 20, 30, 50, 2))
    indices[1].transparent = true
    indices[1].rotation.x = Math.PI * 90 / 180
    indices[1].rotation.y = Math.PI * 90 / 180
    indices[1].translateX(10)
    indices[1].translateY(8)
    indices[1].translateZ(-1.2)

    //Indice 3
    indices.push(new Panel("wcvxwcv dfsdf sdf sdf sdf sdf sdf xcvxcvv sddf sdqsd", 20, 30, 50, 2))
    indices[2].transparent = true
    indices[2].rotation.x = Math.PI * 90 / 180
    indices[2].rotation.y = Math.PI * 90 / 180
    indices[2].translateX(3.5)
    indices[2].translateY(8)
    indices[2].translateZ(-1.2)

    //Indice 4
    indices.push(new Panel("wcvxwcv dfsdf sdf sdf sdf sdf sdf xcvxcvv sddf sdqsd", 22, 19, 50, 2))
    indices[3].transparent = true
    indices[3].rotation.x = Math.PI * 90 / 180
    indices[3].rotation.y = Math.PI * 90 / 180
    indices[3].translateX(7.4)
    indices[3].translateY(2.5)
    indices[3].translateZ(-1.2)

    //Indice 5
    indices.push(new Panel("wcvxwcv dfsdf sdf sdf sdf sdf sdf xcvxcvv sddf sdqsd", 40, 50, 50, 2))
    indices[4].transparent = true
    indices[4].rotation.x = Math.PI * 90 / 180
    indices[4].rotation.y = Math.PI * -90 / 180
    indices[4].translateX(-11.2)
    indices[4].translateY(5)
    indices[4].translateZ(-10.6)

    //Indice 6
    indices.push(new Panel("wcvxwcv dfsdf sdf sdf sdf sdf sdf xcvxcvv sddf sdqsd", 40, 48, 50, 2))
    indices[5].transparent = true
    indices[5].rotation.x = Math.PI * 90 / 180
    indices[5].rotation.y = Math.PI * -90 / 180
    indices[5].translateX(-3.1)
    indices[5].translateY(5)
    indices[5].translateZ(-10.6)


    indices.forEach(indice => {
        this.add(indice)
    });



}