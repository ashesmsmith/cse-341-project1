const express = require('express');
const app = express();
const routes = require('./routes/')

const port = process.env.PORT || 3000;

app.use('/', routes);

app.listen(port, () => {
    console.log(`Running on port: ${port}`)
});