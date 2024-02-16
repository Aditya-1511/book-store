const express = require("express");
const router = express.Router();
const PurchaseHistory = require("../model/purchaseHistoryModel");
const mongoose = require("mongoose");

router.get("/get-purchase-detail", async (req, res) => {
  const { transactionId } = req.query;
  try {
    const bookDetails = await PurchaseHistory.findById({
      _id: new mongoose.Types.ObjectId(transactionId),
    });

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

router.post("/purchase-book", (req, res) => {
  try {
    const { bookId, userId, price, quantity } = req.body;
    const purchase_info = new PurchaseHistory({
      bookId: bookId,
      userId: userId,
      price: price,
      quantity: quantity,
    });

    purchase_info.save();

    const respObj = {
      message: "You have purchased a book successfully",
      result: purchase_info,
    };

    res.send(respObj);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
