const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const cartFields = {
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
}

const cartSchema = Schema({
  ...cartFields,
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;