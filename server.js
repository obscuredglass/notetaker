const path = require("path");
const express = require('express');
const connection = require('./db/connection');
const app = express();
const PORT = process.env.PORT || 3000;

// set up our middleware to handle incoming POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("dotenv").config();

// set up our routes
app.get('/', function(req, res) {
  // send home.html when user hits "root"
  res.sendFile(path.join(__dirname, './html/home.html'));
});