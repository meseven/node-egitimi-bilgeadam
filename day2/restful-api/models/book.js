const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	year: Number,
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("book", MovieSchema);
