const mongoose = require('mongoose');
const {Schema} = mongoose;

// create a schema for the product 
const productSchema = new Schema({
    name:           {type: String, required: true},
    description:    {type: String, required: true},
    price:          {type: Number, required: true},
    imageURL:       {type: String, required: true}
})

module.exports = mongoose.model('Product', productSchema);