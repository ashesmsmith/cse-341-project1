const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'CSE 341 - Project 1 - Contacts API'
    },
    host: 'localhost:8080',
    schemes: ['http', 'https']
};

const outputFiles = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// Generate swagger.json
swaggerAutogen(outputFiles, endpointsFiles, doc);