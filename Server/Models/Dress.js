const mongoose = require('mongoose');

const dress = new mongoose.Schema({
  BrandName: {
    type: String,
    required: true
  },
  Details: {
    type: String,
    required: true
  },
  Sizes: {
    type: [String],
    required: true
  },
  SellPrice: {
    type: Number,
    required: true
  },
  Discount: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  Thumbnail: {
    type: String,
    required: true
  }
});

const Dress = mongoose.model('Dress', dress);

module.exports = Dress;
