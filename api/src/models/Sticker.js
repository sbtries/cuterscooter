const mongoose = require("mongoose");

const { Schema } = mongoose;

const stickerSchema = Schema({
  name: {
    type: String,
    required: true
  },
  price: { 
      type: Number, 
      required: true
  }
});

const Sticker = mongoose.model("Sticker", stickerSchema);

module.exports = Sticker;