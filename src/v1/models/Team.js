const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },   
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Team', TeamSchema);