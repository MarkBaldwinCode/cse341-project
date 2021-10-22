const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: { type: String, default: '', },
    description: { type: String, default: '', },
    author: { type: String, default: '', },
    imageUrl: { type: String, default: '', },
    type: { type: String, default: '', },
    price: { type: Number, default: 0, },
    inCart: { type: Boolean, default: '', },
    category: { type: String, default: '', },
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true}
    
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;