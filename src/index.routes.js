const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  console.log("esta na HOME");
  return res.sendFile(path.join(__dirname, "/public/index.html"));
});

router.get("/works", (req, res) => {
  console.log("esta no WORKS");
  return res.sendFile(path.join(__dirname, "../public/works.html"));
});

router.get("/about", (req, res) => {
  console.log("esta no ABOUT");
  return res.sendFile(path.join(__dirname, "../public/about.html"));
});

module.exports = router;
