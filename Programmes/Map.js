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
            object.position.set(0, 0, 20)
        });
        self.add(object)
    });
    console.log(this)

    var geometry = new THREE.CubeGeometry(4,4,4)
    var material = new THREE.MeshBasicMaterial( {clor: 0xd1d1d1} );
    this.cube = new THREE.Mesh(geometry, material)
    this.cube.position.set(0, 0, 0)
    this.add(this.cube);

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
}