const router = require('express').Router();
// let Avail = require('../models/availableRooms.model');
let Rooms = require('../models/roomslist.model');

const filterAvailableRooms = (rooms) => {
    var availList = []
    rooms.forEach(room => {
        if (room.status == 'Available') {
            availList.push(room)

        }
    })
    return availList
}
router.route('/').get((req, res) => {
    Rooms.find()

        .then(rooms => {
            rooms = filterAvailableRooms(rooms)
            res.json(rooms)
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;