const mysql = require("mysql");
const path = require("path");
const express = require('express');
const connection = require('./db/connection');
require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.DB_PW,
  
  database: "bamazon_db"
});