const mongoose = require('mongoose');

let Carr = mongoose.model('Carr', {
    name : String,
    label: Number
})

module.exports = Carr;