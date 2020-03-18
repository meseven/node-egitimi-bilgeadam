const express = require("express");

const app = express();
app.use(express.static("public"));

const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(80);

let userCount = 0;

io.on("connection", function(socket) {
	userCount++;

	io.emit("userCount", userCount);

	socket.on("newUser", data => {
		socket.broadcast.emit("newUser", data);
	});

	socket.on("changeColor", data => {
		socket.broadcast.emit("changeColor", data);
	});

	socket.on("disconnect", data => {
		userCount--;
		io.emit("userCount", userCount);
		console.log("a user disconnected");
	});
});

app.set("view engine", "pug");

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/colors", (req, res) => {
	res.render("colors");
});

app.get("/counter", (req, res) => {
	res.render("counter");
});

app.listen(3000, err => {
	console.log("Server is running");
});
