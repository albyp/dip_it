const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { 
        type: String, 
        required: true 
    },
    email: {
        type: String, 
        required: false, 
        unique: true 
    },
    password: {
        type: String, 
        required: true 
    },
    role: {
        type: String, 
        default: 'staff' 
    },
    level: { 
        type: Number, 
        default: 1
    },
    createdAt: {
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('User', userSchema);