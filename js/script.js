const sidenav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sidenav);
const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);
const slider2 = document.querySelector(".slider2");
const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
	duration: 200,
	indicators: false,
	interval: 3500,
	height: 500,
});
if (slider2) {
	const slider = document.querySelectorAll(".slider");
	M.Slider.init(slider, {
		duration: 400,
		indicators: true,
		interval: 4000,
		height: 450,
	});
}
const materialboxed = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialboxed);
const floatingbutton = document.querySelectorAll(".fixed-action-btn");
M.FloatingActionButton.init(floatingbutton, {
	direction: "left",
});
const navClient = document.querySelector(".nav-client");
const needTrans = document.querySelector(".needTrans");
if (needTrans) {
	navClient.classList.add("trans");
}
