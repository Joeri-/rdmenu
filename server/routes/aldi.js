const express = require('express');
const router  = express.Router();
const Aldi = require('../models/aldi');

// routes starting with '/api/aldi'
router.get('/', (req, res) => {
    Aldi.find()
        .then(ingrAldi => {
            console.log(ingrAldi);
            res.json(ingrAldi);
        })
        .catch( err => res.send(err));
});

router.post('/', (req, res) => {
    Aldi.create({
        name : req.body.name,
        label : +req.body.label
    })
    .then(ingr => {
        Aldi.find()
        .then(ingrAldi => res.json(ingrAldi));
    })
    .catch( err => res.send(err));
});

module.exports = router;
