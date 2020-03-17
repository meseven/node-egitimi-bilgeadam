const express = require("express");
const router = express.Router();

const Book = require("../models/book");

router.put("/:movie_id", (req, res, next) => {
	Book.findByIdAndUpdate(req.params.movie_id, req.body, {
		new: true
	})
		.then(book => {
			if (!book) res.json({ message: "The book was not found.", code: 99 });

			res.json(book);
		})
		.catch(err => {
			res.json(err);
		});
});

router.get("/", function(req, res, next) {});

router.get("/list", function(req, res, next) {
	Book.find({})
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.json(err);
		});
});

router.post("/", function(req, res, next) {
	// const book = new Book({
	// 	title: req.body.title,
	// 	author: req.body.author,
	// 	year: req.body.year
	// });

	// v.2
	const { title, author, year } = req.body;

	const book = new Book(req.body);

	// v3
	// const book = new Book({
	// 	...req.body
	// });

	book
		.save()
		.then(data => res.json(data))
		.catch(e =>
			res.json({ error: { statusCode: 1, message: "Kayıt eklenemedi." } })
		);

	// res.json({ name: "franz kafka - dönüşüm" });
});

module.exports = router;
