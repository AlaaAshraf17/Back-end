const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const productRoutes = require('./routes/products');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());




app.use('/api/products', productRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));


  
