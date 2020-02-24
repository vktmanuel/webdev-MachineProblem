const express = require('express');
const productController = require('../controllers/product');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

router.get('/products/:id/delete', productController.deleteProduct);

router.get('/products/:id/edit', productController.getEditProduct);

router.post('/products/:id', productController.postUpdateProduct);

router.get('/', productController.getProducts);

exports.routes = router;