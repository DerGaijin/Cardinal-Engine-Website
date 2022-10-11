const IsGithubHost = false;

document.addEventListener("DOMContentLoaded", ReplaceHeader);
document.addEventListener("DOMContentLoaded", ReplaceFooter);

function AJAX(URL, OnCompleted, FormData = null, Async = true) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == XMLHttpRequest.DONE) {
			if (xmlhttp.status == 200) {
				OnCompleted(xmlhttp.response);
			} else {
				alert("AJAX returned Error Code '" + xmlhttp.status + "'");
			}
		}
	};

	if (FormData) {
		xmlhttp.open("POST", URL, Async);
		xmlhttp.send(FormData);
	} else {
		xmlhttp.open("GET", URL, Async);
		xmlhttp.send();
	}
}

function ReplaceHeader() {
	let HeaderURL = "/Header/Header.html";
	if (IsGithubHost) {
		HeaderURL = "/Cardinal-Engine-Website" + HeaderURL;
	}

	AJAX(
		HeaderURL,
		(Response) => {
			let HeaderContainer = document.getElementById("HeaderContainer");
			HeaderContainer.innerHTML = Response;
		},
		null,
		false
	);
}

function ReplaceFooter() {
	let FooterURL = "/Footer/Footer.html";
	if (IsGithubHost) {
		FooterURL = "/Cardinal-Engine-Website" + FooterURL;
	}

	AJAX(
		FooterURL,
		(Response) => {
			let HeaderContainer = document.getElementById("FooterContainer");
			HeaderContainer.innerHTML = Response;
		},
		null,
		false
	);
}
