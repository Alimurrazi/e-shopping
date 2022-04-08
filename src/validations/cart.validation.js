const Joi = require('joi');
const { objectId } = require('./custom.validation');

const cartUpsert = {
  body: Joi.object().keys({
    userId: Joi.required().custom(objectId),
    products: Joi.array().items({
      productId: Joi.required().custom(objectId),
      amount: Joi.number().integer().required(),
    }),
  }),
};

module.exports = {
  cartUpsert,
};
