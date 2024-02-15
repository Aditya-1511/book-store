const express = require("express");
const router = express.Router();
const PuchaseHistory = require("../model/purchaseHistoryModel");

router.get("/get-purchase-detail", async (req, res) => {
  const { purchaseId } = req.query;
  try {
    const bookDetails = await Book.findById({ _id: purchaseId });
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
