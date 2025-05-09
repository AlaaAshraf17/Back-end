const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  images: [String],
  description: String,
  best_seller: Boolean,
  category: String,
  rating: Number,
  stock_quantity: Number,
  in_stock: Boolean,
  reviews: Number,
  featured: Boolean
});


const Product = mongoose.model('Product', productSchema, 'products');



router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    console.log("Fetched products:", products); 
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: err.message });
  }

  
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;

