const express = require('express');
const Recipe = require('../models/recipe');
const Aldi = require('../models/aldi');
const Carr = require('../models/carr');

const router  = express.Router();

// routes starting with '/api/recipe'
router.get('/', (req, res) => {
    Recipe.find()
        .then(recipe => {
            console.log(recipe);
            res.json(recipe);
        })
        .catch( err => res.send(err));
});

router.post('/', (req, res) => {
    Recipe.create({
        text : req.body.text,
        ingrCarr: req.body.ingrCarr,
        ingrAldi: req.body.ingrAldi,
        done : false
    })
    .then(recipe => {
        Recipe.find()
        .then(recipe => res.json(recipe));
    })
    .catch( err => res.send(err));
});

module.exports = router;
