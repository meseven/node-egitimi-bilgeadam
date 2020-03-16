const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// routes
const user = require('./routes/user');
const order = require('./routes/order');

app.use(bodyParser());

app.use('/user', user);
app.use('/order', order);

app.listen(3000, err => {
	if (err) {
		throw err;
	}

	console.log('Server is running on 3000 port! 🚀🚀');
});
