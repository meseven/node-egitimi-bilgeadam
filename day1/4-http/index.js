const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// res.writeHead({ 'content-type': 'charset:utf8' });
	res.writeHead(200, {
		'Content-Type': 'text/plain; charset=utf8',
	});

	if (req.method === 'GET') {
		if (req.url === '/') {
			res.write('Anasayfa');
		} else if (req.url === '/iletisim') {
			res.write('Iletisim');
		} else {
			res.statusCode = 404;
			res.write('Sayfa bulunamadı.');
		}
		res.end();
	}
});

server.listen(3000, err => {
	if (err) {
		throw err;
	}

	console.log('Server is running on 3000 port!');
});
