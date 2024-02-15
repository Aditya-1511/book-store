const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const bcrypt = require("bcrypt");

router.post("/retail-user/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      throw new Error("User already exist.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      userType: 1,
    });

    await newUser.save();

    const respObj = {
      message: "User created successfully",
      data: newUser,
    };

    res.send(respObj);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});

router.post("/author/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      throw new Error("User already exist.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      userType: 3,
    });

    await newUser.save();

    const respObj = {
      message: "User created successfully",
      data: newUser,
    };

    res.send(respObj);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});

router.get("/get-all-retail-users", async (req, res) => {
  const getAllRetailUsers = await User.find({ is_deleted: 0, userType: 1 });
  const respObj = {
    message: "Retail users fetched successfully",
    data: getAllRetailUsers,
  };
  res.send(respObj);
});

router.get("/get-all-authors", async (req, res) => {
  const getAllAuthors = await User.find({ is_deleted: 0, userType: 3 });
  const respObj = {
    message: "List of authors fetched successfully",
    data: getAllAuthors,
  };
  res.send(respObj);
});

module.exports = router;
