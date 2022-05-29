const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    name: {type: String},
    price:{type: Number},
    quantity:{type: Number},
    color: {type: String},
    readyToEat: Boolean
});

const Meme = mongoose.model('Meme', memeSchema)
module.exports = Meme