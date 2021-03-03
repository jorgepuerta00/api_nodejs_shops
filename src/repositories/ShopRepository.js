'use strict';

const IShopRepository = require('../usescases/repository/IShopRepository');

class ShopRepository extends IShopRepository {

    constructor(shopDaoFactory, shopEntityMap) {
        super();
        this.shopDaoFactory = shopDaoFactory;
        this.shopEntityMap = shopEntityMap;
    }

    save(shop) {
        const entity = this.shopEntityMap.serializeToEntity(shop);
        const source = this.shopDaoFactory.getShopDao();   
        return source.save(entity);
    }

    remove(id) {
     
    }

    async get(id) {
      
    }

    async getbyType(type) {
        const source = this.shopDaoFactory.getShopDao();   
        return  this.shopEntityMap.serializeToShop(await source.getbyType(type));
    }

    async all() {
        const source = this.shopDaoFactory.getShopDao();   
        return  this.shopEntityMap.serializeToShop(await source.all());
    }
}

module.exports = ShopRepository;
