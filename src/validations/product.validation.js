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

const getProduct = {
  params: Joi.object().keys({
    productId: Joi.string().required(),
  }),
};

const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string().required(),
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

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    img: Joi.string().allow(null, ''),
    categoryIds: Joi.array().items(Joi.custom(objectId)),
    price: Joi.number(),
  }),
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
