const express = require('express');

const app = express();

// middlewares
const userMiddleware = require('./userMiddleware');

app.use('/user', userMiddleware);

app.use('/user', (req, res) => {
	res.send('User page');
});

app.listen(3000, (req, res) => {
	console.log('Server is running.');
});
