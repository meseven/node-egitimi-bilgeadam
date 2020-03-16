const express = require('express');

const router = express.Router({ caseSensitive: true });

router.get('/profile', (req, res) => {
	res.send('Burası profile sayfası.');
});

router.get('/sendMessage', (req, res) => {
	res.send('Burası sendMessage sayfası.');
});

module.exports = router;
