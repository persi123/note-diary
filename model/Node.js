const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  data: {
    type: String,
    required: true
  },
date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Note", NoteSchema);
