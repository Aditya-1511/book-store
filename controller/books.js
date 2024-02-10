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

module.exports = router;
