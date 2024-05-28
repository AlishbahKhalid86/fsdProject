const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	city: { type: String, required: true },
	address: { type: String, required: true },
    contact: { type: String, required: true },
    age: { type: String, required: true },
    bloodgroup: { type: String, required: true },
});

const Donation = mongoose.model("donation", donationSchema);

module.exports = Donation;