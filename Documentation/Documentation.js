document.addEventListener("DOMContentLoaded", () => {
	var TreeViewTogglers = document.getElementsByClassName("OVL_Toggle");
	var i;
	for (i = 0; i < TreeViewTogglers.length; i++) {
		TreeViewTogglers[i].addEventListener("click", function () {
			this.parentElement.parentElement
				.querySelector(".OVL_Entry_Body")
				.classList.toggle("OVL_Entry_Body_Active");
			this.classList.toggle("OVL_Toggle_Active");
		});
	}

	LoadDocumentation("/Template.html");
});

function LoadDocumentation(Documentation) {
	let DocumentationURL = "/Documentation" + Documentation;
	if (IsGithubHost) {
		DocumentationURL = "/Cardinal-Engine-Website" + DocumentationURL;
	}

	AJAX(DocumentationURL, (Response) => {
		let HeaderContainer = document.getElementById("DocumentationContent");
		HeaderContainer.innerHTML = Response;
	});
}
