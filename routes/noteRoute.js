const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

router.route("/create").post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const date = req.body.date;
  const newNote = new Note({
    title,
    content,
    date,
  });
  newNote.save();
});

router.route("/notes").get((req, res) => {
  Note.find().then((foundNotes) => res.json(foundNotes));
});

module.exports = router;
