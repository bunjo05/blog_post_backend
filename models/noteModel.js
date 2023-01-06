const mongoose = require("mongoose");

const noteSchema = {
  title: String,
  content: String,
  date: Date,
  // file: Image,
  age: Number,
};

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
