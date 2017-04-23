const express        = require('express');
const mongoose       = require('mongoose');
const morgan         = require('morgan');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const path           = require('path');

let app              = express();

mongoose.connect('mongodb://localhost/rdmenu');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.listen(8080);
console.log('App listening on port 8080');

// Models
let Todo = mongoose.model('Todo', {
    text: String,
    done: Boolean
})

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.get('/api/todos', (req, res) => { 
    Todo.find()
        .then(todos => {
            console.log(todos);
            res.json(todos);
        })
        .catch( err => res.send(err));
});

app.post('/api/todos', (req, res) => {
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

app.delete('api/todos/:todo_id', (req, res) => {
    Todo.remove({
        _id: req.params.todo_id
    }, (err, todo) => {
        if (err) res.send(err);

        Todo.find((err, todos) => {
            if (err) res.send(err);
            res.json(todos);
        });
    });
});
