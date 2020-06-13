const mongoose = require('mongoose');

// You need to create a new schema and assign it the following
// constant
const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true //must have a name
    },
    Description: {
        type: String,
        required: true //somethings are self-explanatory
    },
    image: {
        type: String,
        //i couldn't get default to work and i think i know why... but i couldn't fix it.
        //default: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
        
        required: false //somethings are self-explanatory
    },
    price: {
        type: Number,
        required: true //"everything has a price" - Anne Bishop
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);