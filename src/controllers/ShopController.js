'use strict';

const CreateShop = require('../usescases/CreateShop');
const GetAllShops = require('../usescases/GetAllShops');
const GetShopsByType = require('../usescases/GetShopsByType');
const Shop = require('../usescases/domain/Shop');
const ShopRepository = require('../repositories/ShopRepository');
const FirebaseDaoFactory = require('../repositories/daoFactory/FirebaseDaoFactory');
const ShopFirebaseEntityMap = require('../repositories/mapEntities/ShopFirebaseEntityMap');

class ShopController {
    constructor() {
        this.shopRepository = new ShopRepository(new FirebaseDaoFactory(), new ShopFirebaseEntityMap());
    }

    createShop(request, h) {
        const { id, code, name, image, description, type, screen, logo } = request.payload;
        const useCase = new CreateShop(this.shopRepository);
        useCase.setShop(new Shop(id, code, name, image, description, type, screen, logo));
        const response = h.response({ "data": useCase.execute() }).code(201).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }

    async getAllShops(request, h) {
        const useCase = new GetAllShops(this.shopRepository);
        const response = h.response({ "data": await useCase.execute() }).code(200).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }

    async getShopsByType(request, h) {
        const type = request.params.type;
        const useCase = new GetShopsByType(this.shopRepository);
        useCase.setType(type);
        const response = h.response({ "data": await useCase.execute() }).code(200).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }
}

module.exports = ShopController;
