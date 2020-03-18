$(() => {
	const socket = io.connect("http://localhost/");

	const defaultColor = localStorage.getItem("bgcolor");
	$("#colors li").removeClass("active");
	$(".container").css("background-color", defaultColor);
	$(`#colors li[data-color='${defaultColor}']`).addClass("active");

	$("#colors li").on("click", function() {
		const color = $(this).data("color");

		$(".container").css("background-color", color);

		$("#colors li").removeClass("active");
		$(this).addClass("active");

		localStorage.setItem("bgcolor", color);
	});
});
