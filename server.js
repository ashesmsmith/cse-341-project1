const express = require('express');
const mongodb = require('./data/database.js');
const bodyParser = require('body-parser');
const routes = require('./routes/')

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
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