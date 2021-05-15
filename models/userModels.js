const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true, minlength: 5},
    displayName: {type: String, required: true},
    registerDate: {type: Date, default: Date.now},
    totalScore: {type: Number, default: 0},
    avgScore: {type: Number, default: 0},
    friend: [{
        type: String
    }],
    badge: {
        type: Map,
        of: String,
        default: {
            badge1: false,
            badge2: false,
            badge3: false,
        }
    },
    message: [{
        type: Object,
    }],
    sentMessages: [{
        type: Object,
    }],
    tier: {type: String, default: 'Bronze'},
    studyTime: {type: Number, default: 0},
    lastData: {type: Array, default: []}
});

module.exports = User = mongoose.model("user", userSchema);