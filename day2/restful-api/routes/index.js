const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.get("/", (req, res) => {
	res.json({ message: "home" });
});

/* GET home page. */
router.post("/register", (req, res, next) => {
	const { username, password } = req.body;

	bcrypt
		.hash(password, 10)
		.then(hash => {
			const user = new User({
				username,
				password: hash
			});

			user
				.save()
				.then(data => {
					res.json(data);
				})
				.catch(err => {
					res.json(err);
				});
		})
		.catch(e => {
			console.log(e);
		});

	// res.render("index", { title: "Express" });
});

router.post("/login", (req, res) => {
	const { username, password } = req.body;

	User.findOne(
		{
			username
		},
		(err, user) => {
			if (err) throw err;

			if (!user) {
				res.json({
					status: false,
					message: "Authentication failed, user not found."
				});

				return false;
			}

			bcrypt.compare(password, user.password).then(result => {
				if (!result) {
					res.json({
						status: false,
						message: "Authentication failed, wrong password."
					});
				}

				const payload = {
					username
				};
				const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
					expiresIn: 720 // 12 saat
				});

				res.json({
					status: true,
					token
				});
			});
		}
	);
});

module.exports = router;
