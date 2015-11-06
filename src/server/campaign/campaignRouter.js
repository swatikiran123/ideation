'use strict';

var express = require('express');
var router = express.Router();
//var mongojs = require('mongojs');
//var db = mongojs('campaignModel', ['campaigns']);
var campaignModel = require('./campaignSchema');

/* GET /campaigns listing. */
router.get('/', function(req, res, next) {
  console.log("Campaign api get '/'");
  campaignModel.find(function (err, campaignList) {
    if (err) return next(err);
    //console.log(campaignList);
    res.json(campaignList);
  });
});

/* POST /campaigns */
router.post('/', function(req, res, next) {
  console.log("Campaign api post '/'");
  console.log("retrieving:: " + req.body);
  campaignModel.create(req.body, function (err, post) {
    console.log("saving:: " + post);
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /campaigns/id */
router.get('/:id', function(req, res, next) {
  console.log("Campaign api get '/:id'");
  console.log("retrieving:: " + req.params.id);
  campaignModel.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /campaigns/:id */
router.put('/:id', function(req, res, next) {
  console.log("Campaign api put '/:id'");
  campaignModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    console.log("updating:: " + req.params.id + "==>" + post);
    res.json(post);
  });
});

/* DELETE /campaigns/:id */
router.delete('/:id', function(req, res, next) {
  console.log("Campaign api delete '/:id'");
  campaignModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    console.log("deleting:: " + req.params.id);
    res.json(post);
  });
});

module.exports = router;
