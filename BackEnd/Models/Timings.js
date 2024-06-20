const mongoose = require('mongoose');
const TimingsSchema = new mongoose.Schema({
    timeId:Number,
    time:String,
    slots:Number,
    available:Boolean,
},{collection:'GymTimings'})

module.exports = mongoose.model('Timings',TimingsSchema)