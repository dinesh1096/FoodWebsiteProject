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


const usercontroller = require("./controllers/usercontroller.js");
app.use("/",usercontroller )

const logincontrollers = require("./controllers/login.js");
app.use("/",logincontrollers)


const restoitems = require("./controllers/restoitems.js");
app.use("/",restoitems)

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/pages/index.html");
});

app.listen(8080, () => console.log("Succcessfully server started."));
