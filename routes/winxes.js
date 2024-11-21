var express = require('express');
var router = express.Router();
var Winx = require('../models/winx').Winx;

/* GET winxes listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с winxes');
});

/* Страница феечки */
router.get("/:nick", async function(req, res, next) {
    try {
        var winxes = await Winx.find({ nick: req.params.nick });
        console.log(winxes);
        if (!winxes.length) {
            var err = new Error("Нет такой феечки в мультике Winx!.");
            err.status = 404;
            return next(err);
        }
        var winx = winxes[0];
        res.render('winx', {
            title: winx.title,
            picture: winx.avatar,
            desc: winx.desc
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
