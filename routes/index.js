var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Блум */
router.get('/bloom', function(req, res, next) {
  res.send("<h1>Страница Блум</h1>")
  });
  
/* Страница Стеллы */
router.get('/stella', function(req, res, next) {
  res.send("<h1>Страница Стеллы</h1>")
  });

/* Страница Флоры */
router.get('/flora', function(req, res, next) {
  res.send("<h1>Страница Флоры</h1>")
  });

/* Страница Музы */
router.get('/musa', function(req, res, next) {
  res.send("<h1>Страница Музы</h1>")
  });

/* Страница Текны */
router.get('/tecna', function(req, res, next) {
  res.send("<h1>Страница Текны</h1>")
  });

/* Страница Лейлы */
router.get('/aisha', function(req, res, next) {
  res.send("<h1>Страница Лейлы</h1>")
  });

module.exports = router;