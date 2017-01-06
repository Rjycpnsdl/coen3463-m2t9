var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = {
    services: [
        {
            "name":"Dry Cleaning",
            "description":"Tired of rushing around and re-arranging your schedule trying to make it in time to drop off or pick up your dry cleaning? Try this.",
            "price_range":"PHP 1000 - PHP 2000",
            "link": '/dry-clean'
        },
        {
            "name":"Wash and Fold",
            "description":"Don't waste another beautiful Sunday washing, drying and folding laundry - Let Simply Laundry handle the dirty work...",
            "price_range":"PHP 1000 - PHP 1500",
            "link": '/washnfold'
        },
        {
            "name":"Super Rush",
            "description":"In a hurry? Get your Comfy laundry within 4 hours! We can expedite your laundry needs.",
            "price_range":"PHP 750 - PHP 1000",
            "link": '/super-rush'
        },
        {
            "name":"Special Wash",
            "description":"For delicates and branded items, make sure it’s properly cared for with our Special Wash.",
            "price_range":"PHP 5000 - PHP 10000",
            "link": '/special-wash'
        }
    ]
  };
  res.render('index', templateData);
});

module.exports = router;
