const userMiddleware = (req, res, next) => {
	console.log('Burası user middleware.');
	next();
};

module.exports = userMiddleware;
