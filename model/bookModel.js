const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let counter = 0;

const bookSchema = new Schema({
  bookId: {
    type: String,
    default: function () {
      counter += 1;
      return `book-${counter}`;
    },
  },
  authors: [{ type: String }],
  sellCount: Number,
  title: String,
  description: String,
  price: Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
