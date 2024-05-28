const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	city: { type: String, required: true },
	address: { type: String, required: true },
    contact: { type: String, required: true },
    quantity: { type: String, required: true },
    bloodgroup: { type: String, required: true },
});

const Request = mongoose.model("request", requestSchema);

module.exports = Request;