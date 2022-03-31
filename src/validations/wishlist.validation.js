const Joi = require('joi');
const { objectId } = require('./custom.validation');

const addToWishlist = {
  body: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    productId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  addToWishlist,
};
