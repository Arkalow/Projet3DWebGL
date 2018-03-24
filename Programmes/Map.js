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
            object.position.set(0, 0, 21)
        });
        self.add(object)
    });
    console.log(this)

    /**
     * Détecte si la position passé en paramètre est dans la map
     * @param {*} position 
     */
    this.isOn = function(position){
        if(position.x <= 4.5 && position.x >= -4.5 && position.y <= 10 && position.y >= -10){
            return true
        }
        return false
    }


    this.chests = new Array()
    this.chests.push(new Object())
    
    this.add(this.chests[0])
}