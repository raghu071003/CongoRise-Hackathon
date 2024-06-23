const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    timeId: { type: String, default: '-1' }, 
    membership: { type: String, default: '0' }, 
    purchasedOn: { type: String, default: 'null' },
    expiresOn: { type: String, default: 'null' },
}, { collection: 'GymUsers' });

module.exports = mongoose.model('Users', userSchema);
