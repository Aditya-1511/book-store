const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/book_store";
mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

process.on("SIGINT", () => {
  db.close(() => {
    console.log("Mongoose connection disconnected due to app termination");
    process.exit(0);
  });
});

const usersRouter = require("./controller/users");
// const booksRouter = require("./controller/books");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter);
// app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
