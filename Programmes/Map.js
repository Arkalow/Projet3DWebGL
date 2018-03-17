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
        });
        self.add(object)
    });
    console.log(this)
}