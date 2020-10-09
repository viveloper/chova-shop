var express = require('express');
var router = express.Router();

router.get('/products', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/products/:id', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/cart', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/login', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/profile', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/register', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

module.exports = router;
