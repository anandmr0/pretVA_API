const mongoose = require('mongoose');

const product_dataSchema=new mongoose.Schema({
    product_id:{
        type: String
    },
    product_name:{
        type: String
    },
    lead_time:{
        type: String
    },
    weight_gsm:{
        type: String
    },
    quantity:{
        type: String
    },
    price_rs:{
        type: String
    },
    buyer_name:{
        type: String
    },
});

const product_data=mongoose.model('product_data',product_dataSchema);

module.exports=product_data;