'use strict';

var express = require('express');
var router = express.Router();
//var mongojs = require('mongojs');
//var db = mongojs('visitModel', ['campaigns']);
var visitModel = require('./visitSchema');
//var visitModel = require('./scheduleSchema');

console.log("visit api router ready");
/* GET /visit listing. */
router.get('/', function(req, res, next) {
  console.log("visit api get '/'");
  visitModel.find(function (err, visit) {
    if (err) return next(err);
    //console.log(campaignList);
    res.json(visit);
  });
});

/* POST /visit */
router.post('/', function(req, res, next) {
  console.log("visit api post '/'");
  console.log("retrieving:: " + req.body);
  visitModel.create(req.body, function (err, post) {
    console.log("saving:: " + post);
    if (err) return next(err);
    res.json(post);
  });
});


/* GET /visit/id */
router.get('/:id', function(req, res, next) {
  console.log("visit api get '/:id'");
  console.log("retrieving:: " + req.params.id);
  visitModel.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    console.log(post);
    res.json(post);
  });
});

/* PUT /visit/:id */
router.put('/:id', function(req, res, next) {
  console.log("visit api put '/:id'");
  visitModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    console.log("updating:: " + req.params.id + "==>" + post);
    res.json(post);
  });
});

/* DELETE /visit/:id */
router.delete('/:id', function(req, res, next) {
  console.log("visit api delete '/:id'");
  visitModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    console.log("deleting:: " + req.params.id);
    res.json(post);
  });
});
module.exports = router