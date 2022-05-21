const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const Admin = require("./modals/user.js");
//var sessions = require("client-sessions");
var sessions = require("express-session");
const items = require("./modals/schema.js");

app.use(
  sessions({
    cookieName: "sessions", // cookie name dictates the key name added to the request object
    secret: "blargadeeblargblarg", // should be a large unguessable string
    saveUninitialized: true,
    resave: false,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var adminrouter = require("./Controllers/AdminControllers.js");
app.use("/admin", adminrouter);

var resto = require("./Controllers/resto.js");
app.use("/", resto);

var loginrouter = require("./Controllers/LoginControllers.js");
const { db, collection } = require("./modals/schema.js");
const collections = require("./modals/subschema.js");
const console = require("console");
app.use("/login", loginrouter);

//add category
app.get("/AddCategory", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/AddCategory.html");
});

app.post("/", (req, res) => {
  var name = req.body.name;
  var description = req.body.description;

  var data = {
    name: name,
    description: description,
  };

  db.collection("Addcategory").insertOne(data, (err, collection) => {
    console.log("Added Successfully");
  });
  return res.sendFile(__dirname + "/views/Admin/demo.html");
});

//subcategory

app.get("/SubCategory", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/SubCategory.html");
});

app.post("/s", (req, res) => {
  var Name = req.body.Name;
  var SubCategoryName = req.body.SubCategoryName;
  var Description = req.body.Description;

  var obj = new collections({
    Name: Name,
    SubCategoryName: SubCategoryName,
    Description: Description,
  });

  obj.save(function (err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });

  return res.sendFile(__dirname + "/views/Admin/sub.html");
});

app.get("/getsubcat", function (req, res) {
  collections.find({}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});

app.listen(5000, () => console.log("Succcessfully server started."));
