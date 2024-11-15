const express = require('express');
const Cart = require('../Model/cart');

const router = express.Router();

router.post('/addProductToCart' , async (req, res) => {
    const data = req.body;
    const cart = await new Cart(data).save();
    res.send(cart);
})

router.get('/getAllProductInCart', async(req, res) => {
    const limit = req.query.limit;
    const data = await Cart.find().limit(limit);
    res.send(data);
})

router.patch('/updateQuantityById', async (req, res) => {
    const {id, quantity} = req.body;
    const cart = await Cart.findByIdAndUpdate(id, {quantity: quantity});
    
    res.send(cart)
})

module.exports = router;