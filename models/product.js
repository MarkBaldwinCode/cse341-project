const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, default: '', },
    description: { type: String, default: '', },
    author: { type: String, default: '', },
    imageUrl: { type: String, default: '', },
    type: { type: String, default: '', },
    price: { type: Number, default: 0, },
    inCart: { type: Boolean, default: '', },
    category: { type: String, default: '', },
    
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;