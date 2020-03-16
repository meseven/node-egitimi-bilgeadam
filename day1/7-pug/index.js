const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index', { name: 'Kenan', age: 29 });
});

app.get('/users', (req, res) => {
	res.render('users');
});

app.listen(3000, (req, res) => {
	console.log('Server is running.');
});
