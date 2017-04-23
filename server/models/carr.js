const mongoose = require('mongoose');

let Carr = mongoose.model('Carr', {
    text: String,
    label: Number
})

module.exports = Carr;