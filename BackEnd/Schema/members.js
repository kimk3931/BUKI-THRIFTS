const mongoose = require("mongoose");
const { Schema } = mongoose;


const memberSchema = new Schema({
    email : {
        type : String , 
        required : true , 
        unique : true
    }, 
    password : {
        type : String , 
        required : true
    } , 
} , {timestamps : true})

module.exports = mongoose.model('Members' , memberSchema)