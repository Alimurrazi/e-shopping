const Joi = require('joi');
const { objectId } = require('./custom.validation');

const cartUpdate = {
  body: Joi.object().keys({
    userId: Joi.required().custom(objectId),
    products: Joi.array().items({
      productId: Joi.required().custom(objectId),
      amount: Joi.number().integer().required(),
    }),
  }),
};

const getCart = {
  query: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
};

module.exports = {
  cartUpdate,
  getCart,
};
