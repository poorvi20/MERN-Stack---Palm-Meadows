const router = require('express').Router();
let Rooms = require('../models/roomslist.model');


router.route('/').get((req, res)=> {
    
    Rooms.find()
    
   .then(rooms => res.json(rooms))
    .catch(err => res.status(400).json('Error: '+ err));
}); 

router.route('/add').post((req, res) => {
    const roomno = req.body.roomno; 
    const status = req.body.status;

    const newRooms = new Rooms({
        roomno,
        status,
    });

    newRooms.save()
    .then(()=> res.json('Rooms list updated'))
    .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;