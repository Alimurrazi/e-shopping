const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const cartSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
cartSchema.plugin(toJSON);
cartSchema.plugin(paginate);
const Category = mongoose.model('Cart', cartSchema);
module.exports = Category;
