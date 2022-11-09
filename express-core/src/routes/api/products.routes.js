const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/api/products.controller');

router.get('/api/products', productsController.list);
router.get('/api/products/detail/:id', productsController.detail);


module.exports = router;