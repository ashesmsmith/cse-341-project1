const express = require('express');
const mongodb = require('./data/database.js');
const bodyParser = require('body-parser');
const routes = require('./routes/')

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Allow-Control-Allow-Origin', 
        '*');
    res.setHeader('Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, z-Key');
    res.setHeader('Access-Control-Allow-Methods', 
        'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', routes);

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
            console.log(`Database is listening and node running on port: ${port}`)
        });
    }
});