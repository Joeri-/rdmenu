const express        = require('express');
const mongoose       = require('mongoose');
const morgan         = require('morgan');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const path           = require('path');

const config         = require('./config');

let app              = express();

mongoose.connect(config.DB);

app.use(express.static(path.join(__dirname, 'dist')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// Start the server on PORT as specified in config
app.listen(config.PORT);
console.log(`App listening on port ${config.PORT}`);

// Entry point
app.get('/', (req, res) => {
    res.sendFile(path.join(config.FRONTEND, 'index.html'));
});

// Different REST endpoints
app.use('/api/aldi', require('./server/routes/aldi'));
app.use('/api/carr', require('./server/routes/carr'));
app.use('/api/recipe', require('./server/routes/recipe'));
app.use('/api/category', require('./server/routes/category'));
