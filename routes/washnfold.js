var express = require('express');
var router = express.Router();
var services = {
        "name":"Wash and Fold",
        "description":"Don't waste another beautiful Sunday washing, drying and folding laundry - Let Simply Laundry handle the dirty work while you spend your time enjoying life. We take the utmost care of our clients' clothes and will accommodate special washing instructions. Delicate! Dry Flat! Hang Dry! Do Not Wring! - these words you fear, are the same ones we love. Simply select the 'Wash and Hang' option when placing your order and we'll make sure that you never have to fear washing your clothes again.",
        "price_range":"PHP 400/20-kilo"
    };
/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = services;
  res.render('service', templateData);
});

module.exports = router;
