var express = require('express');
var router = express.Router();

router.get('/page/:pageNumber', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

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

router.get('/shipping', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/payment', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/placeorder', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/orders/:id', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/admin/users', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/admin/user/:id/edit', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/admin/products', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/admin/product/:id/edit', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/admin/product/create', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/admin/orders', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/search/:keyword', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

router.get('/search/:keyword/page/:pageNumber', function (req, res, next) {
  const filepath = require('app-root-path').resolve('/public/index.html');
  res.sendFile(filepath);
});

module.exports = router;
