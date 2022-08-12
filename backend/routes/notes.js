const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchUser");
const Note = require("../models/Note");

// Fetch All Notes
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Add Notes
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// Update Note
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).json({ msg: "Note not found" });
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).json({ msg: "Note not found" });
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// Delete Note
module.exports = router;
