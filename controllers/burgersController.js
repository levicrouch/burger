var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// route to get all burgers
router.get("/api/burgers/all", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    // res.json(hbsObject);
    res.render("index", hbsObject)
  });
});

// post route create a new burger
router.post("/api/burgers", function (req, res) {
  burger.create(["burger_name","devoured"], [req.body.burger_name, req.body.devoured], function (result) {
      res.status(200).json({
        id: result.insertId,
        success: true,
        message: "SUCCESS: added a new burger: '" + req.body.burger_name + "' to MySQL with id of: " + result.insertId
      });
    });
});

// PUT route to devour a burger
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  // console.log("condition", condition);
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).json({
        id: result.insertId,
        success: false,
        message: "ERROR: unable to update burger with id: '" + result.insertId + "' to: '" + req.body.devoured
      });
    } else {
      res.status(200).json({
        id: result.insertId,
        success: true,
        message: "SUCCESS: updated burger with id: '" + result.insertId + "' to: '" + req.body.devoured
      });
    }
  });
});

// Export routes for server.js to use.
module.exports = router