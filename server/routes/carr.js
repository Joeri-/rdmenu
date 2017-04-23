const express = require('express');
const Carr = require('../models/carr');

const router  = express.Router();

// routes starting with '/api/aldi'
router.get('/', (req, res) => {
    Carr.find()
        .then(ingrCarr => {
            console.log(ingrCarr);
            res.json(ingrCarr);
        })
        .catch( err => res.send(err));
});

router.post('/', (req, res) => {
    Carr.create({
        name : req.body.name,
        label : req.body.label 
    })
    .then(todo => {
        Carr.find()
        .then(ingrCarr => res.json(ingrCarr));
    })
    .catch( err => res.send(err));
});

module.exports = router;
