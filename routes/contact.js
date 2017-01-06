var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/',function(req, res, next) {
	res.render('contact', {title: 'Contact'});
});

router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'dalaarjay@gmail.com',
			pass: '51862315506010'
		}
	});

	var mailOptions = {
		from: 'John Doe <johndoe@outlook.com>',
		to: 'dalaarjay@gmail.com',
		subject: 'Services Contact',
		text: 'A new message has arrived. Check it out..Name: '+req.body.name+ ' Email: '+req.body.email+' Message: '+req.body.message+'',
		html: '<p>You got new message</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Content: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
	});
});

module.exports = router;