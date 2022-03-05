const httpStatus = require('http-status');
const { categoryService } = require('../services');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const getCategories = catchAsync(async (req, res) => {
  res.send('hello world');
});

const createCategory = catchAsync(async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  res.status(httpStatus.CREATED).send(category);
});

module.exports = {
  getCategories,
  createCategory,
};
