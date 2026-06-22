const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const Document = require("../models/document");

router.post("/upload", upload.single("pdf"), async (req, res) => {
  try {
    const document = new Document({
      filename: req.file.filename,
      filepath: req.file.path,
    });

    await document.save();

    res.status(201).json({
      message: "File uploaded successfully",
      document,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;