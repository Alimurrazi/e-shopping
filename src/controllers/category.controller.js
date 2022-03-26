const httpStatus = require('http-status');
const { categoryService } = require('../services');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const CommonResponse = require('../utils/CommonResponse');

const getCategories = catchAsync(async (req, res) => {
  const filter = pick(req.query, []);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await categoryService.queryCategories(filter, options);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, result));
});

const getCategoryById = catchAsync(async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, category));
});

const createCategory = catchAsync(async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  res.status(httpStatus.CREATED).send(new CommonResponse(httpStatus.CREATED, true, category));
});

const updateCategory = catchAsync(async (req, res) => {
  await categoryService.updateCategoryById(req.params.categoryId, req.body);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, null));
});

const deleteCategory = catchAsync(async (req, res) => {
  await categoryService.deleteCategoryById(req.params.categoryId);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, null));
});

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
