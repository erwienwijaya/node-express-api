const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

app.use(express.json());

//call .env config
require("dotenv").config();

//call config through .env
let PORT = process.env.PORT
let APP_URI = process.env.APP_DEBUG === 'true' ? `${process.env.APP_URI}:${PORT}` : process.env.APP_URI
let APP_STATUS = process.env.APP_DEBUG === 'true' ? 'Development server' : 'Production server'

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
            url: `${APP_URI}/api/`,
            description: `${APP_STATUS}`,
            },
        ],
    },
    apis: ['./swagger/*.js']
};

const options = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "API Documentation - Node",
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/docs',swaggerUI.serve, swaggerUI.setup(swaggerDocs, options));


app.listen(PORT, () => {
    console.log(`Server is running on ${APP_URI}`)
});

module.exports = app;