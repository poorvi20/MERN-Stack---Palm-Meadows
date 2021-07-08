const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingsSchema = new Schema ( {
    name: { type: String, required: true},
    roomno: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true},
    

});

 const Bookings = mongoose.model('Bookings', bookingsSchema);

 module.exports = Bookings; 