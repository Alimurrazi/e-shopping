const Joi = require('joi');
const { objectId } = require('./custom.validation');

const placeOrder = {
  body: Joi.object().keys({
    userId: Joi.custom(objectId),
    total: Joi.number().integer().required(),
    address: Joi.object().keys({
      district: Joi.string().required(),
      upzila: Joi.string().required(),
      fullAddress: Joi.string().required(),
    }),
    products: Joi.array().items({
      productId: Joi.required().custom(objectId),
      name: Joi.string().required(),
      price: Joi.string().required(),
      img: Joi.string().required(),
      amount: Joi.number().integer().required(),
    }),
  }),
};

const getOrders = {
  query: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
};

const getOrderDeatils = {
  query: Joi.object().keys({
    orderId: Joi.required().custom(objectId),
  }),
};

module.exports = {
  placeOrder,
  getOrders,
  getOrderDeatils,
};
