const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    img: Joi.string().allow(null, ''),
  }),
};

const updateCategory = {
  params: Joi.object().keys({
    categoryId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    img: Joi.string().allow(null, ''),
  }),
};

const deleteCategory = {
  params: Joi.object().keys({
    categoryId: Joi.required().custom(objectId),
  }),
};

const getCategories = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCategory = {
  query: Joi.object().keys({
    categoryId: Joi.required().custom(objectId),
  }),
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
