const express = require("express");
const database = require("../db/database");

const router = express.Router();
// app.get('/urls/')
router.get('/', (req, res) => {
  return res.send("Hello")
})

// app.get('/urls/:id')
router.get('/:id', (req, res) => {
  return res.send("Hello")
})

// app.get('/urls/urls')
router.get('/urls', (req, res) => {
  return res.send("Hello")
})