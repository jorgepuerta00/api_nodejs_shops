'use strict';

const GenerateUUID = require('./GenerateUUID');

class CreateShop {
    constructor(shopRepository) {
        this.shopRepository = shopRepository;
        this.generateUUID = new GenerateUUID();
    }

    setShopId() {
        this.generateUUID.setBytes(16);
        this.shop.id = this.shop.id == null ? this.generateUUID.execute() : this.shop.id;
    }
    
    setShopCode() {
        this.generateUUID.setBytes(8);
        this.shop.code = this.shop.code == null ? this.generateUUID.execute() : this.shop.code;
    }

    saveShop() {
        return this.shopRepository.save(this.shop);
    }

    setShop(shop) {
        this.shop = shop;
    }

    execute() {
        this.setShopId();
        this.setShopCode();
        var saveShop = this.saveShop();

        return saveShop;
    }
}

module.exports = CreateShop;
