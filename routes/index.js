var express = require('express');
const { render } = require('express/lib/response');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
  //res.render('index.pug', { title: 'Express' });
});

module.exports = router;
