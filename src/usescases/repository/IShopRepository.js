'use strict';

class IShopRepository {
    constructor() {
     }

    save(user) {
        // To be overridden in concrete implementation
    }

    remove(user) {
        // To be overridden in concrete implementation
    }

    get(idUser) {
        // To be overridden in concrete implementation
    }

    async all() {
        // To be overridden in concrete implementation
    }
}

module.exports = IShopRepository;
