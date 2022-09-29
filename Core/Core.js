let IsGithubHost = false;

if (IsGithubHost) {
	window.addEventListener("load", AddWebsitePrefix);
}

function AddWebsitePrefix() {
	const HRefElements = document.querySelectorAll("[href]");
	const SrcElements = document.querySelectorAll("[src]");

	for (let Index = 0; Index < HRefElements.length; Index++) {
		const Element = HRefElements[Index];
		let HRef = Element.getAttribute("href");
		if (HRef.startsWith("/") && !HRef.startsWith("/Cardinal-Engine-Website")) {
			Element.setAttribute("href", "/Cardinal-Engine-Website" + HRef);
		}
	}

	for (let Index = 0; Index < SrcElements.length; Index++) {
		const Element = SrcElements[Index];
		let Src = Element.getAttribute("src");
		if (Src.startsWith("/") && !Src.startsWith("/Cardinal-Engine-Website")) {
			Element.setAttribute("src", "/Cardinal-Engine-Website" + Src);
		}
	}
}

document.addEventListener("DOMContentLoaded", LoadExternalSites());

function LoadExternalSites() {
	// Set Header
	var HeaderRequest = new XMLHttpRequest();
	HeaderRequest.onreadystatechange = function () {
		if (HeaderRequest.readyState == 4 && HeaderRequest.status == 200) {
			let HeaderContent = document.getElementById("HeaderContent");
			if (HeaderContent) {
				HeaderContent.innerHTML = HeaderRequest.responseText;
			}
		}
	};
	HeaderRequest.open("GET", "Header/Header.html", true);
	HeaderRequest.send(null);

	// Set Footer
	var FooterRequest = new XMLHttpRequest();
	FooterRequest.onreadystatechange = function () {
		if (FooterRequest.readyState == 4 && FooterRequest.status == 200) {
			let FooterContent = document.getElementById("FooterContent");
			if (FooterContent) {
				FooterContent.innerHTML = FooterRequest.responseText;
			}
		}
	};
	FooterRequest.open("GET", "Footer/Footer.html", true);
	FooterRequest.send(null);
}
