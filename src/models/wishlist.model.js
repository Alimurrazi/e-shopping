const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const wishlistSchema = mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
wishlistSchema.plugin(toJSON);
wishlistSchema.plugin(paginate);
const Wishlist = mongoose.model('Wishlist', wishlistSchema);
module.exports = Wishlist;
