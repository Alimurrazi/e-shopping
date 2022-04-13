const Joi = require('joi');
const { objectId } = require('./custom.validation');

const placeOrder = {
  body: Joi.object().keys({
    userId: Joi.custom(objectId),
    total: Joi.required().number().integer().required(),
    address: Joi.object().keys({
      district: Joi.required().string(),
      upzila: Joi.required().string(),
      fullAddress: Joi.required().string(),
    }),
    products: Joi.array().items({
      productId: Joi.required().custom(objectId),
      name: Joi.required().string(),
      price: Joi.required().string(),
      img: Joi.required().string(),
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
