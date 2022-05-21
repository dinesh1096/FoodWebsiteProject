const express = require("express");
const path = require("path");
const router = express.Router();

const Admin = require("../modals/user.js");

const mongoose = require("mongoose");
mongoose
  .connect(
    // "mongodb+srv://dinesh:dinesh123@cluster0.1ume6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    "mongodb+srv://fow:fow@cluster0.p3fge.mongodb.net/Foodwebsite?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(console.log("mongoose connected"));
const connection = mongoose.connection;

// router.post("/getsignindata", function (req, res) {
//   Admin.findOne(
//     { email: req.body.email, password: req.body.password },
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         if (result == null) {
//           // console.log("null");
//           //res.redirect("/admin/login");
//           res.send(error);
//         } else {
//           // console.log("success");
//           //req.sessions.users = result;
//           session = req.session;
//           session.users = result;
//           res.send(result);
//           //res.redirect("/admin/dashboard");
//         }
//       }
//     }
//   );
// });

router.post("/signindata", function (req, res) {
  Admin.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result == null) {
        // console.log("null");
        //res.redirect("/admin/login");
        res.send(error);
      } else {
        // console.log("success");
        //req.sessions.users = result;
        session = req.session;
        session.users = result;
        res.send(result);
        //res.redirect("/admin/dashboard");
      }
    }
  });
});

module.exports = router;
