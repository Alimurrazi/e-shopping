const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const orderSchema = mongoose.Schema(
  {
    products: [
      {
        productId: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        img: {
          type: String,
          required: false,
        },
        amount: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
    userId: {
      type: String,
    },
    total: {
      type: Number,
      required: true,
    },
    address: {
      district: {
        type: String,
        required: true,
      },
      upzila: {
        type: String,
        required: true,
      },
      fullAddress: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);
orderSchema.plugin(toJSON);
orderSchema.plugin(paginate);
const Wishlist = mongoose.model('Order', orderSchema);
module.exports = Wishlist;
