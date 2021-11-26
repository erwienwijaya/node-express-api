module.exports = (app) => {
    const express = require('express');
    const users = require('../controllers/users.controller')
    const router = express.Router();
    const cors = require('cors');

    //call .env config
    require("dotenv").config();

    //call config through .env
    let PORT = process.env.PORT

    var corsOptions = {
        origin: 'https://my-node-express-api.herokuapp.com',
        optionsSuccessStatus: 200
    }

    router.get('/',cors(corsOptions), users.getUser);
    router.post('/',cors(corsOptions), users.createUser);
    router.get('/:id',cors(corsOptions), users.getUserId);
    router.put('/:id',cors(corsOptions), users.updateUser);
    router.delete('/:id',cors(corsOptions), users.deleteUser);

    app.use('/api/users', router);
}