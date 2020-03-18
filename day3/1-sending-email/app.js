const express = require("express");

const app = express();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("YOUR ACCESS KEY");

const from = "wapim.io<noreply@wapim.io>";

app.get("/sendmail", (req, res) => {
	const { name } = req.query;

	if (!name) {
		res.end("Please fill name query param.");
	}

	const msg = {
		to: "miwohay968@mrisemail.com",
		from,
		templateId: "template id",
		dynamic_template_data: {
			name
		}
	};

	sgMail.send(msg, (err, result) => {
		if (err) {
			console.log(err);
		}

		console.log("Gonderildi.");
	});

	res.end("sendmail");
});

app.listen(3000, () => {
	console.log("server is running.");
});
