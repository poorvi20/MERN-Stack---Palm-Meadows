const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guestsSchema = new Schema( {
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true, 
        lowercase: true,
    },

    contactno: {
        type: Number,
        required: true,
        minlength: 10
        
    }

  
});

module.exports = mongoose.model('Guest', guestsSchema);
