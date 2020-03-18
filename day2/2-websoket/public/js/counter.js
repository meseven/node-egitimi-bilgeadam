$(() => {
	const socket = io.connect("http://localhost/");

	socket.on("userCount", count => {
		$(".counter").html(count);
	});
});
