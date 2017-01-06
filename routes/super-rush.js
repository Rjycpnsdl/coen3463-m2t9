var express = require('express');
var router = express.Router();
var services = {
        "name":"Super Rush",
        "description":"In a hurry? Get your Comfy laundry within 4 hours! We can expedite your laundry needs. Items should be preferably endorsed to us in the morning to have it finished in the afternoon. Just coordinate with your nearest branch.",
        "price_range":"PHP 300/20-kilo"
    };
/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = services;
  res.render('service', templateData);
});

module.exports = router;
