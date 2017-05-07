const express = require('express');
const router  = express.Router();
const Category = require('../models/category');

// routes starting with '/api/category'
router.get('/', (req, res) => {
    let query = {};
    switch (req.query.shop) {
        case 'Aldi':
        console.log('Case: Aldi');
        query = {
            'shop': 'Aldi'
        }
        break;
        case 'Carrefour':
        console.log('Case: Carrefour');
        query = {
            'shop': 'Carrefour'
        }
        break;
        default:
        console.log('Case: all');
    }

    Category.find(query)
        .then(ingrAldi => {
            res.json(ingrAldi);
        })
        .catch( err => res.send(err));
});

router.post('/', (req, res) => {
    Category.create({
        name : req.body.name,
        shop : req.body.shop
    })
    .then(ingr => {
        Category.find()
        .then(ingrAldi => res.json(ingrAldi));
    })
    .catch( err => res.send(err));
});

module.exports = router;
