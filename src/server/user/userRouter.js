'use strict';

var express = require('express');
var router = express.Router();
var userModel = require('./userSchema');

/* GET /userApi listing. */
router.get('/', function(req, res, next) {
  userModel.find(function (err, userList) {
    if (err) return next(err);
    res.json(userList);
  });
});

/* POST /userApi */
router.post('/', function(req, res, next) {
  userModel.create(req.body, function (err, post) {
    if (err) return next(err);
    registerNotify(req.body);
    res.json(post);
  });
});

/* GET /userApi/id */
router.get('/:id', function(req, res, next) {
  userModel.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /userApi/:id */
router.put('/:id', function(req, res, next) {
  userModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /userApi/:id */
router.delete('/:id', function(req, res, next) {
  userModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

var nodemailer = require('nodemailer');
 
// create reusable transporter object using SMTP transport 
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'sans.vema@gmail.com',
        pass: 'Pa55pa55$'
    }
});

var EmailTemplate = require('email-templates').EmailTemplate
var path = require('path')

var registerNotify = function(user) {

  var templateDir = path.join(__dirname, '../templates/mails', 'register');
 
  var registerMail = new EmailTemplate(templateDir);
  console.log(user);
console.log(templateDir);
  registerMail.render(user, function (err, results) {

    if(err){
      return console.log(err);
    }
    // result.html 
    // result.text 
      // setup e-mail data with unicode symbols 
  var emailId = user.handle + "@csc.com";
  var mailOptions = {
      from: 'Ideation Admin <ideation-admin@csc.com>', 
      to: emailId, // list of receivers 
      subject: 'User registration activation', // Subject line 
      text: results.text, // plaintext body 
      html: results.html // html body 
  };
   
   console.log(results.html);
  // send mail with defined transport object 
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
   
  });
  });

}

module.exports = router;
