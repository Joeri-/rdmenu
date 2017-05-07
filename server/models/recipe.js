const mongoose = require('mongoose');

let Recipe = mongoose.model('Recipe', {
    text: String,
    ingrAldi: [Number],
    ingrCarr: [Number]
})

module.exports = Recipe;