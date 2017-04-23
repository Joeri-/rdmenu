const mongoose = require('mongoose');

let Aldi = mongoose.model('Aldi', {
    name: String,
    label: Number
})

module.exports = Aldi;