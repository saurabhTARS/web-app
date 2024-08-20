const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD operations for products
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
