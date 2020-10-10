const products = require('./../models/productModel');


exports.getProduct = async (req, res, next) => {
    console.log(req.params.buyer_name)
    
    const product = await products.find(req.params);
    console.log(product);
    if (!product) {
      return next('Product Not Found', 404);
    }
    res.status(200).json({
      status: 'success',
      data: {
        product
      }
    });
  };

  exports.getProductFilter=async (req, res, next) => {

    console.log(req.body);
   
    const product = await products.find(req.query);
    res.status(200).json({
        status: 'success',
        data: {
          product
        } 
      });
  };

