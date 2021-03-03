'use strict';

 class IShopDao{
    constructor() { }

    save(entity) {
        // To be overridden in concrete implementation
    }

    remove(id) {
        // To be overridden in concrete implementation
    }

    get(id) {
        // To be overridden in concrete implementation
    }

    getbyType(type) {
        // To be overridden in concrete implementation
    }

    async all() {
        // To be overridden in concrete implementation
    }
}

module.exports = IShopDao;
