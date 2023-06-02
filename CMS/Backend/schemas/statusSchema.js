const mongoose = require('mongoose');
const {Schema} = mongoose;


// create a schema for the status
const statusSchema = new Schema({
    _id:        { type: Number },
    status:     { type: String }
})


module.exports = mongoose.model('Status', statusSchema);
