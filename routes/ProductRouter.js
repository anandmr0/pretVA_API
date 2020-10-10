const express = require('express');
const router = express.Router();
const productController=require('../controller/ProductController');


router.route('/').get(productController.getProductFilter)


router.route('/:buyer_name').get(productController.getProduct);



module.exports=router;