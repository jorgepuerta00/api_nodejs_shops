'use strict';

const ShopFirebaseDao = require('../firebasePersistence/ShopFirebaseDao');

class FirebaseDaoFactory {

    getShopDao() {
        return ShopFirebaseDao;
    }
}

module.exports =  FirebaseDaoFactory;