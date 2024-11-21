const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const Winx = mongoose.model('Winx', { name: String });
const fairy = new Winx({ name: 'Рокси' });
fairy.save().then(() => console.log('Магия!'));