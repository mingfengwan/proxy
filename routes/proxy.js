var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
router.get('/*', function(req, res, next) {
    res.send('respond with a *');
    console.log(req.url);
});
*/

var request = require('request');

router.use('/*', function(req, res) {
    var url = req.originalUrl.substring(7);
    var r = null;
    if(req.method === 'POST') {
        request.post({uri: url, json: req.body}).pipe(res);
    } else if (req.method === 'GET') {
        request.get(url).pipe(res);
    }
});

module.exports = router;
