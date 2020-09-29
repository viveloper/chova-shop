var express = require('express');
var router = express.Router();
var path = require('path');

/* GET products page. */
router.get('/', function (req, res, next) {
  res.sendFile(require('app-root-path').resolve('/public/index.html'));
});

module.exports = router;
