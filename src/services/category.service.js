const httpStatus = require('http-status');
const { Category } = require('../models');
const ApiError = require('../utils/ApiError');

const createCategory = async (body) => Category.create(body);
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
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  Object.assign(category, updateBody);
  await category.save();
  return category;
};

const deleteCategoryById = async (categoryId) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  await category.remove();
  return category;
};

module.exports = {
  createCategory,
  queryCategories,
  updateCategoryById,
  getCategoryById,
  deleteCategoryById,
};
