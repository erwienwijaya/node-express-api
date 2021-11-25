module.exports = (app) => {
    const express = require('express');
    const users = require('../controllers/users.controller')
    const router = express.Router();

    router.get('/', users.getUser);
    router.post('/', users.createUser);
    router.get('/:id', users.getUserId);
    router.put('/:id', users.updateUser);
    router.delete('/:id', users.deleteUser);

    app.use('/api/users', router);
}