var router = require("express").Router();
var path = require("path");

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// router.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/404.html"));
// });


module.exports = router;