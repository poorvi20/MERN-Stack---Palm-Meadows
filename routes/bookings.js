const router = require('express').Router();
let Booking = require('../models/bookings.model');



router.route('/add').post((req, res) => {
    const name = req.body.name;
    const roomno = req.body.roomno; 
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);


    const newBooking = new Booking({
        name,
        roomno,
        duration,
        date,
    });

    newBooking.save()
    .then(()=> res.json('Booking details saved'))
    .catch(err => res.status(400).json('Error: '+ err));
});

    router.route('/:id').get((req,res) => {
        Booking.findById(req.params.id)
        .then(bookings => res.json(bookings))
        .catch(err => res.status(400).json('Error: '+ err));
    });

    router.route('/:id').delete((req,res) => {
        Booking.findByIdAndDelete(req.params.id)
        .then(bookings => res.json('Booking deleted'))
        .catch(err => res.status(400).json('Error: '+ err));
    });

    router.route('/update/:id').post((req,res) => {
        Booking.findById(req.params.id)
        .then(bookings => {
            bookings.roomno = req.body.roomno;
            bookings.duration = req.body.duration; 
            bookings.date = req.body.date; 

            bookings.save()
             .then(()=> res.json('Booking details updated'))
                .catch(err => res.status(400).json('Error: '+ err));

        })

        .catch(err => res.status(400).json('Error: '+ err));

    });

 module.exports = router;