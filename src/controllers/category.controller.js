const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const getCategories = catchAsync(async (req, res) => {
  res.send('hello world');
});

module.exports = {
  getCategories,
};
