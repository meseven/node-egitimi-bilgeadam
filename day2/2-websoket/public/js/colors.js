$(() => {
	function changeColor(color) {
		$("#colors li").removeClass("active");
		$(".container").css("background-color", color);
		$(`#colors li[data-color='${color}']`).addClass("active");
	}

	const socket = io.connect("http://localhost/");

	socket.on("changeColor", color => {
		changeColor(color);
	});

	const defaultColor = localStorage.getItem("bgcolor");
	changeColor(defaultColor);

	$("#colors li").on("click", function() {
		const color = $(this).data("color");

		socket.emit("changeColor", color);

		$(".container").css("background-color", color);

		$("#colors li").removeClass("active");
		$(this).addClass("active");

		localStorage.setItem("bgcolor", color);
	});
});
