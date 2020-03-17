const express = require("express");

const app = express();
app.use(express.static("public"));

var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(80);

io.on("connection", function(socket) {
	socket.on("newUser", data => {
		socket.broadcast.emit("newUser", data);
	});

	// setTimeout(() => {
	// 	console.log("test");

	// 	// io.emit("user", { username: "kenan" });
	// 	socket.broadcast.emit("broadcast", "user", { username: "kenan" });
	// }, 5000);

	// socket.on("my other event", function(data) {
	// 	console.log(data);
	// });
});

app.set("view engine", "pug");

app.get("/", (req, res) => {
	res.render("index");
});

app.listen(3000, err => {
	console.log("Server is running");
});
