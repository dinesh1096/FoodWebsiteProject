const express = require("express");
const path = require("path");
const router = express.Router();

//admin login
router.get("/login", function (req, res) {
  session = req.session;
  if (session.users) {
    res.redirect("/admin/dashboard");
  } else {
    res.sendFile(path.resolve("views/Admin/login.html"));
  }
});

// Admin portal

// dashboad page
router.get("/dashboard", function (req, res) {
  session = req.session;
  if (session.users) {
    res.sendFile(path.resolve("views/Admin/index.html"));
  } else {
    res.redirect("/admin/login");
  }
});

// session clear
router.get("/logout", function (req, res) {
  req.session.destroy();
  res.redirect("/admin/login");
});

//product grid
router.get("/productgrid", function (req, res) {
  res.sendFile(path.resolve("views/Admin/ecom-product-grid.html"));
});
//customers
router.get("/customers", function (req, res) {
  res.sendFile(path.resolve("views/Admin/ecom-customers.html"));
});

//Dark
router.get("/darkdashboard", function (req, res) {
  res.sendFile(path.resolve("views/Admin/index-2.html"));
});

//orders list
router.get("/orderslist", function (req, res) {
  res.sendFile(path.resolve("views/Admin/orders-list.html"));
});

//orders Details
router.get("/orderdetails", function (req, res) {
  res.sendFile(path.resolve("views/Admin/order-detail.html"));
});

//Customers list
router.get("/customerslist", function (req, res) {
  res.sendFile(path.resolve("views/Admin/customer-list.html"));
});
// analytics
router.get("/analytics", function (req, res) {
  res.sendFile(path.resolve("views/Admin/analytics.html"));
});
//review
router.get("/reviews", function (req, res) {
  res.sendFile(path.resolve("views/Admin/reviews.html"));
});
//admin login
// app.get("/admin/login", function (req, res) {
//   res.sendFile(path.resolve ( "/views/Admin/login.html");
// });

//page register
router.get("/register", function (req, res) {
  res.sendFile(path.resolve("views/Admin/page-register.html"));
});
//data table
router.get("/datatable", function (req, res) {
  res.sendFile(path.resolve("views/Admin/table-datatable-basic.html"));
});
//restaurants
router.get("/restaurants", function (req, res) {
  res.sendFile(path.resolve("views/Admin/restaurants.html"));
});
//Add category
router.get("/addcategory", function (req, res) {
  res.sendFile(path.resolve("views/Admin/AddCategory.html"));
});
//subcategory
router.get("/subcategory", function (req, res) {
  res.sendFile(path.resolve("views/Admin/SubCategory.html"));
});
router.get("/demo", function (req, res) {
  res.sendFile(path.resolve("views/Admin/demo.html"));
});
router.get("/sub", function (req, res) {
  res.sendFile(path.resolve("views/Admin/sub.html"));
});

module.exports = router;
