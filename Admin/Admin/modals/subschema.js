const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  Name: { type: String },
  SubCategoryName: { type: String },
  Description: { type: String },
  Resturant_name: { type: String },
});

module.exports = mongoose.model("subcategory", itemsSchema);
