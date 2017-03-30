var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express' });
});
router.post('/index', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/form1', function(req, res, next) {
    res.render('form1', { title: 'Express' });
});

router.get('/form2', function(req, res, next) {
    res.render('form2', { title: 'Express' });
});

router.get('/form3', function(req, res, next) {
    res.render('form3', { title: 'Express' });
});

module.exports = router;
