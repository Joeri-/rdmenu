const path = require('path');

const config = {
    PORT: 8080,
    FRONTEND: path.join(__dirname, 'dist'),
    DB: 'mongodb://localhost/rdmenu'
}

module.exports = config;