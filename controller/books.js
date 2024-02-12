const express = require("express");
const router = express.Router();
const Book = require("../model/bookModel");

router.post("/add-book", async (req, res) => {
  const { title, description, price, authors } = req.body;

  try {
    const newBook = new Book({
      title: title,
      price: price,
      description: description,
      authors: authors,
    });

    await newBook.save();

    const respObj = {
      message: "Book added successfully",
      data: newBook,
    };

    res.send(respObj);
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).send("Error adding book");
  }
});

router.get("/get-book", async (req, res) => {
  const { bookId } = req.query;
  try {
    const bookDetails = await Book.findById({ _id: bookId });
    const respObj = {
      message: "Book details fetched successfully",
      data: bookDetails,
    };

    res.send(respObj);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).send("Error fetching book");
  }
});

module.exports = router;
