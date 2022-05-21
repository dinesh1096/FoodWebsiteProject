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
const Restaurents= require('../modules/restomain.js');




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
var dbs = monk("mongodb+srv://fow:fow@cluster0.p3fge.mongodb.net/Foodwebsite?retryWrites=true&w=majority");
var collection = dbs.collection('items')
var restomain = dbs.collection('restomain')


var router=express.Router();



//// dumy data  to add into restaurent menu
/// retrive dummy data to resto 1 cakes



router.get('/getcatageroydata', function(req,res){
    collection.find({"Resturant_name":"FoodO Clock","Category_name":"Biryani"}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })

router.get('/getcatageroydata2', function(req,res){
    collection.find({"Resturant_name":"FoodO Clock","Category_name":"Soft drinks"}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })
  
  
  
  //resto 2
  
  //// dumy data  to add into restaurent menu
  /// retrive dummy data to resto 2 pizza
  
  router.get('/getcatageroydata_resto2_1', function(req,res){
    collection.find({"Resturant_name":"Emerald Grill","Category_name":"Pizza"}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })
  
  //// dumy data  to add into restaurent menu
  /// retrive dummy data to resto 2 Burger
  
  router.get('/getcatageroydata_resto2_2', function(req,res){
    collection.find({"Resturant_name":"Emerald Grill","Category_name":"Burger"}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })
  
  
  ///resto3
  
  //// dumy data  to add into restaurent menu
  /// retrive dummy data to resto 3 Desserts
  
  router.get('/getcatageroydata_resto3_1', function(req,res){
    collection.find({"Resturant_name":"keiba","Category_name":"Desserts"}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })
  
  //// dumy data  to add into restaurent menu
  /// retrive dummy data to resto 3 cakes
  
  router.get('/getcatageroydata_resto3_2', function(req,res){
    collection.find({"Resturant_name":"keiba","Category_name":"cakes"}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })
  
  //// dumy data  to add into restaurent menu
  /// retrive dummy data to resto 4 Tiffin
  
  router.get('/getcatageroydata_resto4_1', function(req,res){
    collection.find({"Resturant_name":"JK Classic","Category_name":"Tiffin"}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })
  
  //// dumy data  to add into restaurent menu
  /// retrive dummy data to resto 4 Tiffin
  
  router.get('/getcatageroydata_resto4_2', function(req,res){
    collection.find({"Resturant_name":"JK Classic","Category_name":"Juices"}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })
  
  //// dumy data  to add into restaurent menu
  /// retrive dummy data to resto 5 juices
  
  router.get('/getcatageroydata_resto5_1', function(req,res){
    collection.find({"Resturant_name":"FULL MOON","Category_name":"Juices"}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })
  
  //// dumy data  to add into restaurent menu
  /// retrive dummy data to resto 5 Ice Creams
  router.get('/getcatageroydata_resto5_2', function(req,res){
    collection.find({"Resturant_name":"FULL MOON","Category_name":"Ice Creams"}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })
  
  //// dumy data  to add into restaurent menu
  /// retrive dummy data to resto 6 soups
  router.get('/getcatageroydata_resto6_1', function(req,res){
    collection.find({"Resturant_name":"Blue Plates","Category_name":"Soup"}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })
  
  //// dumy data  to add into restaurent menu
  /// retrive dummy data to resto 6 Noodles
  router.get('/getcatageroydata_resto6_2', function(req,res){
    collection.find({"Resturant_name":"Blue Plates","Category_name":"Noodles"}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })
  
  
  
  
  
  
  ////data to restaurent page
  router.get('/getrestomain', function(req,res){
    restomain.find({}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        console.log(docs)
        res.send(docs)
      }
    })
  })



  
router.get('/getrestaurentsData', function(req,res){
    Restaurents.find({}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        console.log(docs)
        res.send(docs)
      }
    })
  
  })



  router.post('/gettingItem', function(req,res){
    console.log(req.body)
    collection.find({Item_name:req.body.name}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        res.send(docs)
      }
    })
  })
  
  
  ///restaurents data
  router.get('/getitems', function(req,res){
    
    Items.find({}, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        // console.log(docs)
        res.send(docs)
      }
    })
  })





  module.exports=router
  
  