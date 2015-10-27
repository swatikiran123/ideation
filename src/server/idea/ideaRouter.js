'use strict';

var express = require('express');
var router = express.Router();
var ideaModel = require('./ideaSchema');

/* GET /ideaApi listing. */
router.get('/', function(req, res, next) {
  ideaModel.find(function (err, ideaList) {
    if (err) return next(err);
    res.json(ideaList);
  });
});

/* POST /ideaApi */
router.post('/', function(req, res, next) {
  ideaModel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /ideaApi/id */
router.get('/:id', function(req, res, next) {
  ideaModel.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /ideaApi/:id */
router.put('/:id', function(req, res, next) {
  ideaModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /ideaApi/:id */
router.delete('/:id', function(req, res, next) {
  ideaModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
