// routes/api.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productontroller');
const usercontrol= require('../controllers/usercontrol');

// Route to get all products
router.get('/products', productController.getAllProducts);
router.get('/products/:productId',productController.getpro)
router.post('/register',usercontrol.register)
router.post('/login',usercontrol.login)

module.exports = router;