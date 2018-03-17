function Map(){
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
    loader.load('../TranseptSud/TranseptTexture4096.jpg', function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    /***
     * Chargement du modèle
     */
    var loader = new THREE.OBJLoader(manager);
    loader.load('../TranseptSud/transeptSudBox.obj', function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });
        object.position.z = 20 //on place le sol de la salle à 0 aproximatif
        self.add(object)
    });

    
    console.log(this)
}