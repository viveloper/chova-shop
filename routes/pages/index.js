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

router.get('/checkout', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

module.exports = router;
