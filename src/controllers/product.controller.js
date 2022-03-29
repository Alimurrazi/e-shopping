const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const CommonResponse = require('../utils/CommonResponse');
const { productService } = require('../services');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');

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

const getProductById = catchAsync(async (req, res) => {
  const product = await productService.getProductById(req.params.productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, product));
});

const deleteProduct = catchAsync(async (req, res) => {
  await productService.deleteProductById(req.params.productId);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, null));
});

const updateProduct = catchAsync(async (req, res) => {
  await productService.updateProductById(req.params.productId, req.body);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, null));
});

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  getProductById,
  deleteProduct,
};
