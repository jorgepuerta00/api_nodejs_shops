'use strict';

const ShopFirebaseEntity = require('../entities/ShopFirebaseEntity');
const Shop = require('../../usescases/domain/Shop');

const _serializeSingleShopEntity = (entity) => {
    var firebaseEntity = new ShopFirebaseEntity(
        entity.id,
        entity.code,
        entity.name,
        entity.image,
        entity.description,
        entity.type,
        entity.screen,
        entity.logo
    );
    return JSON.parse(JSON.stringify(firebaseEntity));
};

const _serializeSingleShop = (entity) => {
    return new Shop(
        entity.id,
        entity.code,
        entity.name,
        entity.image,
        entity.description,
        entity.type,
        entity.screen,
        entity.logo
    );
}

module.exports = class ShopFirebaseEntityMap {
    serializeToEntity(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleShopEntity);
        }
        return _serializeSingleShopEntity(data);
    }

    serializeToShop(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleShop);
        }
        return _serializeSingleShop(data);
    }
};
