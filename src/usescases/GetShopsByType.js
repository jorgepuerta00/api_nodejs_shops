'use strict';

/**
 * Get all shops from database
 */
class GetShopsByType {
    constructor(shopRepository) {
        this.shopRepository = shopRepository;
    }

    setType(type) {
        this.type = type;
    }

    async execute() {
        return await this.shopRepository.getbyType(this.type);
    }
}

module.exports = GetShopsByType;
