'use strict';

class Shop {
    constructor(id = null, code, name, image, description, type, screen, logo) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.image = image;
        this.description = description;
        this.type = type;
        this.screen = screen;
        this.logo = logo;
    }
}
module.exports = Shop;