const httpStatus = require('http-status');
const { Cart, Product } = require('../models');
const ApiError = require('../utils/ApiError');

const getTotalPriceOfProducts = (products, productsWithAmount) => {
  let total = 0;
  productsWithAmount.forEach((productWithAmount) => {
    const selected = products.find((product) => product.id === productWithAmount.productId);
    total += selected.price * productWithAmount.amount;
  });

  return total;
};

const getCart = async (userId) => {
  let cart = await Cart.findOne({ userId });
  if (cart === null) {
    const newCart = {
      userId,
      products: [],
      totalPrice: 0,
    };
    cart = await Cart.create(newCart);
  }
  return cart;
};

const cartUpdate = async (body) => {
  const cart = await Cart.findOne({ userId: body.userId });
  if (cart === null) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  Object.assign(cart, body);
  const productIds = body.products.map((product) => product.productId);
  const prodcuts = await Product.find({ _id: { $in: productIds } });
  cart.totalPrice = getTotalPriceOfProducts(prodcuts, body.products);
  const updatedCart = await cart.save();
  return updatedCart;
};

module.exports = {
  cartUpdate,
  getCart,
};
