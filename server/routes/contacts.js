const router = require('express').Router();
let Contact = require('../models/contact');

router.route('/').get((req, res) => {
    Contact.find()
      .then(contact=> res.json(contact))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  
router.route('/add').post((req, res) => {
    const {Name,Email,Number, Message } = req.body;
    console.log(Name, Email);
    const newcontact = new Contact({
      Name,
      Email,
      Number,
      Message
});
newcontact.save()
.then(() => res.json('Contact added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Contact.findById(req.params.id)
      .then(contact => res.json(contact))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Contact.findByIdAndDelete(req.params.id)
      .then(() => res.json('contact deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;
