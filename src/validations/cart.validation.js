const Joi = require('joi');
const { objectId } = require('./custom.validation');

const cartUpsert = {
  body: Joi.object().keys({
    userId: Joi.required().custom(objectId),
    products: [{ productId: Joi.required().custom(objectId), amount: Joi.required().number().integer() }],
  }),
};

module.exports = {
  cartUpsert,
};
