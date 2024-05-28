const router = require("express").Router();
const Donation = require("../models/donation");

router.post('/', async (req, res) => {
    const donation = new Donation({
      name: req.body.name,
      email: req.body.email,
      city: req.body.city,
      address: req.body.address,
      contact: req.body.contact,
      age: req.body.age,
      bloodgroup: req.body.bloodgroup
    });
  
    try {
      const newDonation = await donation.save();
      res.status(201).json(newDonation);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const donations = await Donation.find().exec();
      res.status(200).json(donations);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;