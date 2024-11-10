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
router.get('/searchProduct', async (req, res) => {
    const { name } = req.query; // Lấy từ khóa tìm kiếm từ query parameters

    try {
        // Kiểm tra nếu name không được cung cấp
        if (!name) {
            return res.status(400).send({
                message: 'Please provide a product name to search',
            });
        }

        // Tìm kiếm sản phẩm theo tên với regex (không phân biệt hoa/thường)
        const products = await Product.find({
            name: { $regex: name, $options: 'i' }  // 'i' để tìm kiếm không phân biệt hoa/thường
        });

        res.status(200).send({
            message: 'success',
            products: products,
        });
    } catch (error) {
        console.error("Error searching products:", error);
        res.status(500).send({
            message: 'Error searching products',
            error: error.message
        });
    }
});


module.exports = router;