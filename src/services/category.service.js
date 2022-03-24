const httpStatus = require('http-status');
const { Category } = require('../models');
const ApiError = require('../utils/ApiError');

const createCategory = async (body) => {
  const category = await Category.create(body);
  return category;
};
const queryCategories = async (filter, options) => {
  const categories = await Category.paginate(filter, options);
  return categories;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCategoryById = async (id) => Category.findById(id);

const updateCategoryById = async (categoryId, updateBody) => {
  const response = await Category.updateOne({ _id: categoryId }, updateBody);
  if (!response.nModified) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  return response;
};

const deleteCategoryById = async (categoryId) => {
  const response = await Category.deleteOne({ _id: categoryId });
  if (!response.deletedCount) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  return response;
};

module.exports = {
  createCategory,
  queryCategories,
  updateCategoryById,
  getCategoryById,
  deleteCategoryById,
};
