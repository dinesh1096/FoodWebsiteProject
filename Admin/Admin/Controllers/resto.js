const express = require("express");
const path = require("path");
const router = express.Router();

const mongoose = require("mongoose");

// app.use(bodyParser.json());
const Restaurents = require("../modals/restaurent.js");
const customerorders = require("../modals/customerorder.js");

const urlencoded = require("body-parser/lib/types/urlencoded");
mongoose
  .connect(
    "mongodb+srv://fow:fow@cluster0.p3fge.mongodb.net/Foodwebsite?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Successfully Connected To MongoDB Database.");
  })
  .catch((e) => {
    console.log("Not Connected To MongoDB Database.");
  });

const connection = mongoose.connection;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// const bodyParser = require("body-parser");

router.get("/getrestaurentsData", function (req, res) {
  Restaurents.find({}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
      res.send(docs);
    }
  });
});

router.get("/getcustomerorders", function (req, res) {
  customerorders.find({}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
      res.send(docs);
    }
  });
});

module.exports = router;
