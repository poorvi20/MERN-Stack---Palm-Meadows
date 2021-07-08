const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const availableSchema = new Schema ( {
    status: { type: String, required: true},
    
    
});

 const availableRooms = mongoose.model('Available Rooms', availableSchema);

 module.exports = availableRooms; 