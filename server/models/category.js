const mongoose = require('mongoose');

let Category = mongoose.model('Category', {
    name: String,
    shop: String
})

module.exports = Category;