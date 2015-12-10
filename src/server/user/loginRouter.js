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
  console.log('loginapi post method');
    if(req.body.username == 'svema' && req.body.password == '1234')
      res.send('1');
    else
      res.send();

}); // end of post '/' router


module.exports = router;