var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("index");
});
router.get("/index", function (req, res) {
  res.render("index");
});

router.get("/newConnection", function (req, res) {
  res.render("newConnection");
});

router.get("/about", function (req, res) {
  res.render("about");
});
router.get("/contact", function (req, res) {
  res.render("contact");
});

router.get("/login", function (req, res) {
  res.render("login");
});

module.exports = router;
