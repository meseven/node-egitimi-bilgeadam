$(() => {
	const socket = io.connect("46.101.133.54");
	const username = prompt("Please enter your name", "");

	if (username != null) {
		socket.emit("newUser", { username });
	}

	socket.on("newUser", data => {
		console.log(data);
		$("#userList").append(`<li>${data.username}</li>`);
	});
});
