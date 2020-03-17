const express = require("express");
const router = express.Router();

const Book = require("../models/book");

/* GET users listing. */
router.get("/", function(req, res, next) {
	res.json({ name: "franz kafka - dönüşüm" });
});

router.post("/", function(req, res, next) {
	// const book = new Book({
	// 	title: req.body.title,
	// 	author: req.body.author,
	// 	year: req.body.year
	// });

	// v.2
	// const { title, author, year } = req.body;

	// const book = new Book({
	// 	title,
	// 	author,
	// 	year
	// });

	console.log(...req.body);

	const book = new Book({
		...req.body
	});

	book
		.save()
		.then(() => console.log("Kayıt eklendi."))
		.catch(e => {
			console.log(e);
			console.log("Kayıt eklenemedi!");
		});

	// res.json({ name: "franz kafka - dönüşüm" });
});

module.exports = router;
