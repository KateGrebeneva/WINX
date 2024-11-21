const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String })

schema.methods.magic = function(){
    console.log(this.name + " сказала магия!")
}

const Winx = mongoose.model('Winx', schema);

const fairy = new Winx({ name: 'Рокси' });
fairy.save().then(() => fairy.magic());