const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Winx = require('./models/winx.js').Winx

var winx = new Winx({
    title: "Дафна",
    nick: "daphna",
})

winx.save();