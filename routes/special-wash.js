var express = require('express');
var router = express.Router();
var services = {

        "name":"Dry Cleaning",
        "description":"For delicates and branded items, make sure it’s properly cared for with our Special Wash. Each item is carefully processed and even hand-washed when needed to ensure it looks better, longer.",
        "price_range":"PHP 550/20-kilo "
    };
/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = services;
  res.render('service', templateData);
});

module.exports = router;
