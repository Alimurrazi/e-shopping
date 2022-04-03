const Joi = require('joi');
const { objectId } = require('./custom.validation');

const addToWishlist = {
  body: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    productId: Joi.string().custom(objectId),
  }),
};
const removeFromWishlist = {
  params: Joi.object().keys({
    wishlistId: Joi.required().custom(objectId),
  }),
};
const getWishlist = {
  query: Joi.object().keys({
    userId: Joi.required().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

module.exports = {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
};
