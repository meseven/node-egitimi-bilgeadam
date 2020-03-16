const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Burası order sayfası.');
});

module.exports = router;
