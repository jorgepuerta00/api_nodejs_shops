'use strict';

const JWT = require('jsonwebtoken');
const ShopController = require('../../../controllers/ShopController');
const shopsController = new ShopController();

module.exports = [
  {
    method: 'GET',
    path: '/api/token',
    config: {
      auth: false
    },
    handler: async (request, h) => {
      const people = {
        1: {
          id: 1,
          name: 'Jen Jones'
        }
      };
      const token = JWT.sign(people[1], 'NeverShareYourSecret');
      return h.response({
        token: token
      }).code(200).type('application/json');
    }
  },
  {
    method: "GET",
    path: "/",
    config: { auth: false },
    handler: async (request, h) => {
      return { text: 'Token not required' };
    }
  },
  {
    method: 'POST',
    path: '/api/shops',
    config: { auth: 'jwt' },
    handler: async (request, h) => shopsController.createShop(request, h)
  },
  {
    method: 'GET',
    path: '/api/shops',
    config: { auth: 'jwt' },
    handler: async (request, h) => shopsController.getAllShops(request, h)
  },
  {
    method: 'GET',
    path: '/api/shops/{type}',
    config: { auth: 'jwt' },
    handler: async (request, h) => shopsController.getShopsByType(request, h)
  }
];
