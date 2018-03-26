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
    var texture = new THREE.Texture({transparent: true});

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
        return false
    }
    
    /**
     * Indices
     */
    var indices = new Array()

    //Indice 1
    indices.push(new Panel("En japonais il n'y à pas la notion de pronom... \n\n Pour dire toi on écrit 君（kimi)", 20, 30, 50, 2))
    indices[0].transparent = true
    indices[0].rotation.x = Math.PI * 90 / 180
    indices[0].rotation.y = Math.PI * 90 / 180
    indices[0].translateX(11)
    indices[0].translateY(4)
    indices[0].translateZ(-1.2)

    //Indice 2
    indices.push(new Panel("Le theme d'un phrase est exprimé par la particule は(wa).\n Le theme est souvent associé au sujet de la phrase", 20, 30, 50, 2))
    indices[1].transparent = true
    indices[1].rotation.x = Math.PI * 90 / 180
    indices[1].rotation.y = Math.PI * 90 / 180
    indices[1].translateX(10)
    indices[1].translateY(8)
    indices[1].translateZ(-1.2)

    //Indice 3
    indices.push(new Panel("La particule の (no) est utilisé pour exprimer l'appartenance.\n Par exemple :\n\nベッドの上 (bedonoue) signifi le dessus du lit", 20, 30, 50, 2))
    indices[2].transparent = true
    indices[2].rotation.x = Math.PI * 90 / 180
    indices[2].rotation.y = Math.PI * 90 / 180
    indices[2].translateX(3.5)
    indices[2].translateY(8)
    indices[2].translateZ(-1.2)

    //Indice 4
    indices.push(new Panel("中 (naka) représente l'idée du milieu, l'intérieur", 22, 19, 50, 2))
    indices[3].transparent = true
    indices[3].rotation.x = Math.PI * 90 / 180
    indices[3].rotation.y = Math.PI * 90 / 180
    indices[3].translateX(7.4)
    indices[3].translateY(2.5)
    indices[3].translateZ(-1.2)

    //Indice 5
    indices.push(new Panel("ベッド (bedo) signifi le lit. \nEn fait, c'est un mot anglais(bed) que les japonais se sont appropriés", 20, 30, 50, 2))
    indices[4].transparent = true
    indices[4].rotation.x = Math.PI * 90 / 180
    indices[4].rotation.y = Math.PI * -90 / 180
    indices[4].translateX(-11.2)
    indices[4].translateY(5)
    indices[4].translateZ(-10.6)

    //Indice 6
    indices.push(new Panel("寝る (neru) signifi être couché...\n Mais comme pour un français, un japonais utilise ce terme pour dire dormir", 20, 30, 50, 2))
    indices[5].transparent = true
    indices[5].rotation.x = Math.PI * 90 / 180
    indices[5].rotation.y = Math.PI * -90 / 180
    indices[5].translateX(-3.1)
    indices[5].translateY(2.4)
    indices[5].translateZ(-10.6)


    indices.forEach(indice => {
        this.add(indice)
    });



}