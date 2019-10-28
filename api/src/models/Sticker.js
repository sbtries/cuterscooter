const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const stickerSchema = Schema({
  name: {
    type: String,
    required: true
  },
  price: { 
      type: Number, 
      required: true
  },
  description: {
    type: String,
    required: false
  },
  imagePath: {
    type: String, 
    required: false
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  }
});

const Sticker = mongoose.model("Sticker", stickerSchema);

module.exports = Sticker;