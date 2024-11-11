const express = require('express');
const Product = require('../Model/product');

const router = express.Router();

router.get('/getAllProductByLimit', async (req, res) => {
    const limit = req.query.limit;
    const product = await Product.find().skip(0).limit(20);
    res.send(product);
})

router.get('/getProductById', async (req, res) => {
    const id = req.query;
    const product = await Product.findById(id);
    res.send(product);
})



module.exports = router;