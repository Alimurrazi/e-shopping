const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const CommonResponse = require('../utils/CommonResponse');
const { productService } = require('../services');
const pick = require('../utils/pick');

const createProduct = catchAsync(async (req, res) => {
  const category = await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(new CommonResponse(httpStatus.CREATED, true, category));
});

const getProducts = catchAsync(async (req, res) => {
  const filter = { categoryIds: { $in: [req.query.categoryId] } };
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await productService.queryProducts(filter, options);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, result));
});

const updateProduct = catchAsync(async (req, res) => {
  await productService.updateProductById(req.params.categoryId, req.body);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, null));
});

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
};
