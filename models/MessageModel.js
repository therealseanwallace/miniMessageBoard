const mongoose = require("mongoose");

const { Schema } = mongoose;

const MessageSchema = new Schema({
  text: String,
  user: String,
  added: Date
});

const MessageModel = mongoose.model("Messages", MessageSchema);

module.exports = MessageModel;