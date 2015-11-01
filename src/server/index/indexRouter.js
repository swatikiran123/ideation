'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Ideation Portal' });
});

/* GET todo page. */
router.get('/todo', function(req, res) {
  res.render('todo', { title: 'Ideation Portal - ToDo List' });
});

/* GET campaign page. */
router.get('/campaign', function(req, res) {
  res.render('campaign', { title: 'Ideation Portal - Campaigns' });
});

/* GET idea page. */
router.get('/idea', function(req, res) {
  res.render('idea', { title: 'Ideation Portal - Ideas' });
});

/* GET user page. */
router.get('/user', function(req, res) {
  res.render('user', { title: 'Ideation Portal - User Management' });
});

/* GET user page. */
router.get('/login', function(req, res) {
  res.render('login', { title: 'Ideation Portal - Security' });
});

router.get('/dashboard', function(req, res) {
  res.render('dashboard', { title: 'Ideation Portal - Dashboard' });
});

module.exports = router;
