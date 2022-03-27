const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getProducts = {
  query: Joi.object().keys({
    categoryId: Joi.string().required(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    img: Joi.string().allow(null, ''),
    categoryIds: Joi.array().items(Joi.custom(objectId)).required(),
    price: Joi.number().required(),
  }),
};

module.exports = {
  createProduct,
  getProducts,
};
