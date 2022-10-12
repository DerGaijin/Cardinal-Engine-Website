document.addEventListener("scroll", CheckHeaderSize);

function lerp(start, end, amt) {
	return (1 - amt) * start + amt * end;
}

function CheckHeaderSize(event) {
	const ClampedScroll = Math.min(Math.max(window.scrollY, 0), 100);
	const Percentage = (100 * ClampedScroll) / 100 / 100;

	document.getElementById("HeaderContent").style.height =
		lerp(90, 55, Percentage) + "px";
}
