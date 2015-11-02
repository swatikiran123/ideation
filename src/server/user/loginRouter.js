'use strict';

var express = require('express');
var router = express.Router();
var userModel = require('./userSchema');

/* GET /userApi listing. */
router.get('/', function(req, res, next) {
  userModel.find(function (err, userList) {
    if (err) return next(err);
    res.send('login service invoked');
  });
});

/* POST /userApi */
router.post('/', function(req, res, next) {
  userModel.create(req.body, function (err, post) {
    if (err) return next(err);
    console.log("Request body: ");
    console.log(req.body);
    console.log("Request username: " + req.body.username);
    console.log("Request post: " + post)

    if(req.body.username == 'svema' && req.body.password == '1234')
      res.send('1');
    else
      res.send();
  });
});

module.exports = router;