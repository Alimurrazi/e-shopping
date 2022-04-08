const httpStatus = require('http-status');
const { Cart, Product } = require('../models');
const ApiError = require('../utils/ApiError');

const getTotalPriceOfProducts = (products, productIds) => {
  let total = 0;

  productIds.forEach((id) => {
    const selected = products.find((product) => product.id === id);
    total += selected.price;
  });

  return total;
};

const cartUpsert = async (body) => {
  const newCart = body;
  const productIds = body.products.map((product) => product.productId);
  const prodcuts = await Product.find({ _id: { $in: productIds } });
  newCart.totalPrice = getTotalPriceOfProducts(prodcuts, productIds);
  const cart = await Cart.create(body);
  return cart;
};

module.exports = {
  cartUpsert,
};
