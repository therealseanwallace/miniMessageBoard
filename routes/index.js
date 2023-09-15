const express = require("express");
const router = express.Router();
const MessageModel = require("../models/MessageModel.js");

/* const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]; */

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const messages = await MessageModel.find().lean();
    res.render("index", { title: "Mini Messageboard", messages: messages });
  } catch (error) {
    next(error);  // Pass the error to the error handler, if there's any error during fetching
  }
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New post" });
});

router.get("/error", function (req, res, next) {
  res.render("error");
});

router.post("/new", function (req, res, next) {
  console.log(req.body.name, req.body.message);
  /* messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  }) */
  const message = {
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  };
  const newMessage = new MessageModel(message);
  newMessage
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => next(err));
  //res.redirect('/')
});

module.exports = router;
