var express = require("express");
var app = express();
const path = require("path");

const cookieParser = require("cookie-parser");
const sessions = require('express-session');
// var collection=require("./models/newfooditems_schema");
app.use(sessions({
    cookieName: "sessions",
    secret: "Rakesh",
    saveUninitialized:true,
    resave: false

}));

var session;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// var path = require('path');
// const RegisterationData = require('../modules/login_schema.js');
// const RegforbusinessData= require('../modules/busiregi_schema.js');

const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "/public/log_reg_styles/css")));


app.use(express.static(path.join(__dirname, "/custlogin/css")))
app.use(express.static(path.join(__dirname, "/busireg/css")));
app.use(bodyParser.json()); 


const mongoose = require("mongoose");
const urlencoded = require("body-parser/lib/types/urlencoded");
mongoose.connect("mongodb+srv://fow:fow@cluster0.p3fge.mongodb.net/Foodwebsite?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(() => {
    console.log("Successfully Connected To MongoDB Database.");
}).catch((e) => {
    console.log("Not Connected To MongoDB Database.");
})

const connection = mongoose.connection;

var monk = require('monk');
const { Router } = require("express");
const { Session } = require("inspector");
var dbs = monk("mongodb+srv://fow:fow@cluster0.p3fge.mongodb.net/Foodwebsite?retryWrites=true&w=majority");
var collection = dbs.collection('items')
var restomain = dbs.collection('restomain')


var router=express.Router();


router.get("/restaurents", function (req, res) {
  res.sendFile(path.resolve("pages/restaurents.html"));
});


router.get("/restaurents2", function (req, res) {
  res.sendFile(path.resolve("pages/restaurents2.html"));
});
//restaurent pages1-6
router.get("/resto_1", function (req, res) {
  res.sendFile(path.resolve( "pages/resto_1.html"));
});


router.get("/resto_2", function (req, res) {
  res.sendFile(path.resolve("pages/resto_2.html"));
});

router.get("/resto_3", function (req, res) {
  res.sendFile(path.resolve("pages/resto_3.html"));
});

router.get("/resto_4", function (req, res) {
  res.sendFile(path.resolve("pages/resto_4.html"));
});

router.get("/resto_5", function (req, res) {
  res.sendFile(path.resolve("pages/resto_5.html"));
});

router.get("/resto_6", function (req, res) {
  res.sendFile(path.resolve("pages/resto_6.html"));
});

/// cart and order
// router.get("/cart_order1", function (req, res) {
//   session=req.session;
//   if(session.user){
//     console.log(session.user);
//     res.sendFile(path.resolve("pages/cart.html"));
//   }else{
//     res.redirect("/login");
//   }
// });

router.get("/cart_order1", function (req, res) {
    res.sendFile(path.resolve("pages/cart.html"));
});

router.get("/cart_order2", function (req, res) {
  res.sendFile(path.resolve("pages/cart_2.html"));
});

router.get("/cart_order3", function (req, res) {
  res.sendFile(path.resolve("pages/cart_3.html"));
});


//about page

router.get("/about", function (req, res) {
  res.sendFile(path.resolve("pages/about.html"));
});

//faq page

router.get("/faq", function (req, res) {
  res.sendFile(path.resolve("pages/faq.html"));
});

// //login 
// router.get("/login", function (req, res) {
//   session=req.session;
//   if(session.user){
//     res.send("welcome User <a href=\'/logout'>click to logout</a>")
//   }else{
//     res.sendFile(path.resolve("pages/login.html"));
//   }
  
// });

// app.get("/logout", function (req, res) {
//   req.session.destroy();
//   res.redirect("/")
// });


//user register 
router.get("/userregister", function (req, res) {
  res.sendFile(path.resolve("pages/register.html"));
});

//register for business

router.get("/registerforbusiness", function (req, res) {
  res.sendFile(path.resolve("pages/businessreg.html"));
});


router.get("/main", function (req, res) {
  res.sendFile(path.resolve("pages/main.html"));
});

// router.get("/resto_11:id", function (req, res) {
//   res.sendFile(path.resolve("pages/resto_11.html"));
// });

router.get("/resto_11", function (req, res) {
  res.sendFile(path.resolve("pages/resto_11.html"));
});

module.exports=router