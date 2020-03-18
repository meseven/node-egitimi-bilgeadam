const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');
chai.use(chaiHttp);

let token, bookId;

describe('/api/movies tests', () => {
	before(done => {
		chai
			.request(server)
			.post('/login')
			.send({ username: 'mehmet', password: '123' })
			.end((err, res) => {
				token = res.body.token;
				done();
			});
	});

	describe('/GET books', () => {
		it('it should GET all the books', done => {
			chai
				.request(server)
				.get('/books/list')
				.set('x-access-token', token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					done();
				});
		});
	});

	describe('/POST book', () => {
		it('it should POST a book', done => {
			const book = {
				author: 'Albert Camus',
				title: 'Yabancı',
				year: 1950,
			};

			chai
				.request(server)
				.post('/books')
				.send(book)
				.set('x-access-token', token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('title');
					res.body.should.have.property('author');
					res.body.should.have.property('year');
					bookId = res.body._id;
					done();
				});
		});
	});

	describe('/PUT/:book_id book', () => {
		it('it should UPDATE a book given by id', done => {
			const book = {
				title: 'Suç ve Ceza',
				author: 'Dostoyevski',
				year: 1910,
			};

			chai
				.request(server)
				.put('/books/' + bookId)
				.send(book)
				.set('x-access-token', token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('title').eql(book.title);
					res.body.should.have.property('author').eql(book.author);
					res.body.should.have.property('year').eql(book.year);

					done();
				});
		});
	});

	describe('/DELETE/:book_id book', () => {
		it('it should DELETE a book given by id', done => {
			chai
				.request(server)
				.delete('/books/' + bookId)
				.set('x-access-token', token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('status').eql(1);
					done();
				});
		});
	});
});
