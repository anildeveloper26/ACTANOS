const mongoose = require('mongoose');

const dataschema = new mongoose.Schema({
    name:{
        required:true,
        type:String,
    },
    age:{
        required:true,
        type:Number,
    }
});

module.exports = mongoose.model('Data',dataschema)