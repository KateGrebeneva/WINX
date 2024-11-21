var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Блум */
router.get('/bloom', function(req, res, next) {
  res.render('winx', {
    title: "Блум",
    picture: "/images/bloom.png",
    desc: "Фея Огня Дракона и принцесса планеты Домино."
    });
  });
    
  /* Страница Стеллы */
router.get('/stella', function(req, res, next) {
  res.render('winx', {
    title: "Стелла",
    picture: "/images/stella.png",
    desc: "Фея Солнца, Луны и Звёзд и принцесса Солярии"
    });
  });

  /* Страница Флоры */
router.get('/flora', function(req, res, next) {
   res.render('winx', {
    title: "Флора",
    picture: "/images/flora.png",
    desc: "Фея природы и фея-хранительница Линфеи"
    });
  });

  /* Страница Музы */
router.get('/musa', function(req, res, next) {
  res.render('winx', {
    title: "Муза",
    picture: "/images/musa.png",
    desc: "Фея музыки и гармонии, хранительница Мелодии."
    });
  });

  /* Страница Текны */
router.get('/tecna', function(req, res, next) {
  res.render('winx', {
    title: "Текна",
    picture: "/images/tecna.png",
    desc: "Фея технологий и фея-хранительница Зенита."
    });
  });

  /* Страница Лейлы */
router.get('/aisha', function(req, res, next) {
  res.render('winx', {
    title: "Лейла",
    picture: "/images/aisha.png",
    desc: "Фея волн и морфикса, принцесса Андроса"
    });
  });
    
module.exports = router;