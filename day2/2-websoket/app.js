const express = require("express");

const app = express();
app.use(express.static("public"));

const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(80);

io.on("connection", function(socket) {
	socket.on("newUser", data => {
		socket.broadcast.emit("newUser", data);
	});

	socket.on("changeColor", data => {
		socket.broadcast.emit("changeColor", data);
	});
});

app.set("view engine", "pug");

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/colors", (req, res) => {
	res.render("colors");
});

app.listen(3000, err => {
	console.log("Server is running");
});
