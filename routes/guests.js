const router = require('express').Router();
let Guest = require('../models/guests.model');


router.route('/').get((req, res)=> {
    Guest.find()
   .then(guests => res.json(guests))
    .catch(err => res.status(400).json('Error: '+ err));
}); 

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname; 
    const lastname = req.body.lastname;
    const email = req.body.email;
    const contactno = Number(req.body.contactno);

    const newGuest = new Guest({
        firstname,
        lastname,
        email,
        contactno,
    });

    newGuest.save()
    .then(()=> res.json('Guest details saved'))
    .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;