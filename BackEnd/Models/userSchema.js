const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    membership:{type:Number,default:0},
},{collection:'GymUsers'})

module.exports = mongoose.model('Users',userSchema)