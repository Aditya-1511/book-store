const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: String,
  authors: [{ type: String }],
  sellCount: Number,
  title: String,
  description: String,
  price: Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
