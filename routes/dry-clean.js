var express = require('express');
var router = express.Router();
var services = {
        "name":"Dry Cleaning",
        "description":"Tired of rushing around and re-arranging your schedule trying to make it in time to drop off or pick up your dry cleaning? Wouldn't it be nice to have freshly pressed suits delivered right to your door, right when you need them? With Simply Laundry, now you can! We will pick up your clothes, dry clean them, and deliver them back to your door. The best part is that there are no delivery charges or hidden fees, the price you see is the price you pay.",
        "price_range":"PHP 250/20-kilo ",
    };
/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = services;
  res.render('service', templateData);
});

module.exports = router;
