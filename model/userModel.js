const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  userType: Number, // 1 = Retail user, 2 = Admin, 3 = Author
  is_deleted: {
    type: Number,
    default: 0, // 0 =No, 1 =Yes
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
