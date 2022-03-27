const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const CommonResponse = require('../utils/CommonResponse');
const { productService } = require('../services');

const createProduct = catchAsync(async (req, res) => {
  const category = await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(new CommonResponse(httpStatus.CREATED, true, category));
});

module.exports = {
  createProduct,
};
