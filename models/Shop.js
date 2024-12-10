const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true, 
        trim: true     
    },
    price: {
        type: Number,
        required: true, 
        min: 0         
    }
});
const Shop = mongoose.model('shop', shopSchema);
module.exports = Shop;
