var express = require('express');
const { render } = require('express/lib/response');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index.pug',{title: 'Olá mundo'});
});

module.exports = router;
