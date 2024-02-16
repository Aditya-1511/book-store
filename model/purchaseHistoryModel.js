const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;

let counter = 0;

const purchaseHistory = new Schema(
  {
    purchaseId: {
      type: String,
      default: function () {
        counter += 1;
        return `${year}-${month}-book-${counter}`;
      },
    },
    bookId: String,
    userId: String,
    price: Number,
    quantity: Number,
    is_deleted: {
      type: Number,
      default: 0, // 0=No, 1=Yes
    },
  },
  { timestamps: true }
);

const PurchaseHistory = mongoose.model("PurchaseHistory", purchaseHistory);

module.exports = PurchaseHistory;
