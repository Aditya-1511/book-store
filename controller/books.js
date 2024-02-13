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

router.put("/update-book-details", async (req, res) => {
  const { bookId, price, title, description, authors } = req.query;
  try {
    const bookDetails = await Book.findById({ _id: bookId });
    console.log(bookDetails, "bookDetails");
    if (!bookDetails) {
      throw new Error("Book does not exist");
    }

    const query = {};
    const update = {};

    if (title) {
      update["title"] = title;
    }

    if (description) {
      update["description"] = description;
    }

    if (price) {
      update["price"] = parseInt(price);
    }

    if (authors) {
      update["authors"] = authors;
    }

    console.log(query, "query");
    const update_book_details = await Book.updateOne(query, update);

    const respObj = {
      message: "Book details updated successfully",
      // data: bookDetails,
    };

    res.send(respObj);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).send("Error fetching book");
  }
});

router.delete("/delete-book", async (req, res) => {
  const { bookId } = req.query;
  const getBookDetails = await Book.findById({ _id: bookId });

  if (!getBookDetails) {
    throw new Error("This book does not exist");
  }

  if (getBookDetails.is_deleted === 1) {
    throw new Error("This book has been deleted already");
  }

  const deleteBook = await Book.updateOne({ _id: bookId }, { is_deleted: 1 });

  if (deleteBook) {
    const respObj = {
      message: "The book has been deleted successfully from our records",
    };

    res.send(respObj);
  }
});

module.exports = router;
