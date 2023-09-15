const express = require('express');
const router = express.Router();

router.get("/", function(req, res, next) {
  res.render("form", { title: "New post"})
})

module.exports = router;