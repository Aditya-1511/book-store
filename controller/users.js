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

module.exports = router;
