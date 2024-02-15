const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import Book from "./bookModel";
import User from "./userModel";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;

const purchaseHistory = new Schema({
  purchaseId: {
    type: String,
    default: function () {
      counter += 1;
      return `${year}-${month}-book-${counter}`;
    },
  },
  bookId: {
    type: String,
    ref: Book,
  },
  userId: {
    type: String,
    ref: User,
  },
  price: Number,
  quantity: Number,
  is_deleted: {
    type: Number,
    default: 0, // 0=No, 1=Yes
  },
  timestamps: true,
});

const PuchaseHistory = mongoose.model("PuchaseHistory", purchaseHistory);

module.exports = PuchaseHistory;
