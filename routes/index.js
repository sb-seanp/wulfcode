var express = require('express');
var router = express.Router();
var quoter = require('../app/quoter');

/* GET home page. */
router.get('/', function(req, res, next) {
  var quote = quoter.getQuote();

  res.render('index', {
    title: 'Wulfcode',
    quote: quote[0],
    speaker: quote[1],
    source: quote[2]
  });
});

module.exports = router;
