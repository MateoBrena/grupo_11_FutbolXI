const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/users.controller');

router.get('/api/users', usersController.list);
router.get('/api/users/:id', usersController.detail);


module.exports = router;