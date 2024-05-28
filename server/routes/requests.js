const router = require("express").Router();
const Request = require("../models/request");

router.post('/', async (req, res) => {
    const request = new Request({
      name: req.body.name,
      email: req.body.email,
      city: req.body.city,
      address: req.body.address,
      contact: req.body.contact,
      quantity: req.body.quantity,
      bloodgroup: req.body.bloodgroup
    });
  
    try {
      const newRequest = await request.save();
      res.status(201).json(newRequest);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const requests = await Request.find().exec();
      res.status(200).json(requests);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;