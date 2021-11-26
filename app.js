const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

app.use(express.json());

//call .env config
require("dotenv").config();

//call config through .env
let PORT = process.env.PORT
let URL = 'http://localhost'
let APP_STATUS = 'Production server'

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });


app.get('/', (req, res) => {
    res.send('Hi, this is Rest-API with Node.js');
});

//call users routes 
require('./app/routes/users.route')(app);

//call swagger (api-documentations)
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description:
            'This is a REST API application made with Express.',
            license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
            }
        },
        servers: [
            {
            url: `${URL}:${PORT}/api/`,
            description: `${APP_STATUS}`,
            },
        ],
    },
    apis: ['./swagger/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/docs',swaggerUI.serve, swaggerUI.setup(swaggerDocs));


app.listen(PORT, () => {
    console.log(`Server is running on ${URL}:${PORT}`)
});

module.exports = app;