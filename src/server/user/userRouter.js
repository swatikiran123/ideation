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

module.exports = router;
