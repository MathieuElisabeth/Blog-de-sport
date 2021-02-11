var express = require('express');
var router = express.Router();
const articles = require("../app/controllers/article.controller.js");

// Create a new Tutorial
router.post("/", articles.create);

// Retrieve all articles
router.get("/", articles.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", articles.findOne);

// Update a Tutorial with id
router.put("/:id", articles.update);

// Delete a Tutorial with id
router.delete("/:id", articles.delete);

module.exports = router;
