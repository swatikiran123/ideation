'use strict';

var express = require('express');
var router = express.Router();
//var mongojs = require('mongojs');
//var db = mongojs('cvmModel', ['campaigns']);
var cvmModel = require('./cvmSchema');
//var cvmModel = require('./scheduleSchema');

console.log("Cvm api router ready");
/* GET /cvm listing. */
router.get('/', function(req, res, next) {
  console.log("Cvm api get '/'");
  cvmModel.find(function (err, cvm) {
    if (err) return next(err);
    //console.log(campaignList);
    res.json(cvm);
  });
});

/* POST /cvm */
router.post('/', function(req, res, next) {
  console.log("Cvm api post '/'");
  console.log("retrieving:: " + req.body);
  cvmModel.create(req.body, function (err, post) {
    console.log("saving:: " + post);
    if (err) return next(err);
    res.json(post);
  });
});


/* GET /cvm/id */
router.get('/:id', function(req, res, next) {
  console.log("Cvm api get '/:id'");
  console.log("retrieving:: " + req.params.id);
  cvmModel.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    console.log(post);
    res.json(post);
  });
});

/* PUT /cvm/:id */
router.put('/:id', function(req, res, next) {
  console.log("Cvm api put '/:id'");
  cvmModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    console.log("updating:: " + req.params.id + "==>" + post);
    res.json(post);
  });
});

/* DELETE /cvm/:id */
router.delete('/:id', function(req, res, next) {
  console.log("Cvm api delete '/:id'");
  cvmModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    console.log("deleting:: " + req.params.id);
    res.json(post);
  });
});
module.exports = router