const express = require('express');
const Product = require('../Model/product');

const router = express.Router();

router.get('/getAllProductByLimit', async (req, res) => {
    const limit = req.query.limit;
    console.log(limit);
    
    const product = await Product.find().skip(0).limit(limit);
    console.log(product);
    
    res.status(200).send({
        messenger: 'success',
        product: product,
    });
})


module.exports = router;