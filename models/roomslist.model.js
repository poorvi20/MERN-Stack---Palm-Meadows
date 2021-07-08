const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomsSchema = new Schema ( {
    roomno: { type: String, required: true },
    status: { type: String, required: true },
    
});

 const Roomslist = mongoose.model('Roomslist', roomsSchema);

 module.exports = Roomslist; 