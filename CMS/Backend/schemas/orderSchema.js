const mongoose = require('mongoose');
const {Schema} = mongoose;

// create a schema for the order rows
const orderRowSchema = new Schema({
    product:        {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    quantity:       {type: Number, default: 1}
})

// create a schema for the order
const orderSchema = new Schema({
    user:         {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    status:       {type: Number, ref: 'Status', default: 1 },
    orderRows:    {type: [orderRowSchema]}
})

module.exports = mongoose.model('Order', orderSchema);