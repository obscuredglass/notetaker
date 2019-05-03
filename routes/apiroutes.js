var router = require("express").Router();
var connection = require("../db/connection");

router.get("/api/notes", (req, res) => {
  connection.query("SELECT * FROM notes", (err, databaseNotes) => {
    res.json(databaseNotes);
  });
});

router.post("/api/notes", (req, res) => {
connection.query ("INSERT INTO notes SET?". req.body, (err, results) => {
  if (err) throw err;
  res.json(results);
});

});



module.exports = router;