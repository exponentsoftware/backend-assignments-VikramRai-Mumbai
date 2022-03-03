const mongoose = require("mongoose");

const db = {};

db.mongoose = mongoose;
db.user = require("./todo");

module.exports = db;

