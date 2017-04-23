const express = require('express');
const router  = express.Router();
const Todo    = require('../models/todo');


// routes starting with '/api/todos'
router.get('/', (req, res) => {
    Todo.find()
        .then(todos => {
            console.log(todos);
            res.json(todos);
        })
        .catch( err => res.send(err));
});

router.post('/', (req, res) => {
    Todo.create({
        text : req.body.text,
        done : false
    })
    .then(todo => {
        Todo.find()
        .then(todos => res.json(todos))
    })
    .catch( err => res.send(err));
});

module.exports = router;
