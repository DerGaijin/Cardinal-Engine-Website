document.addEventListener("DOMContentLoaded", () => {
	var TreeViewTogglers = document.getElementsByClassName("OverviewListToggle");
	var i;
	for (i = 0; i < TreeViewTogglers.length; i++) {
		TreeViewTogglers[i].addEventListener("click", function () {
			this.parentElement.parentElement
				.querySelector(".OVL_Entry_Body")
				.classList.toggle("OVL_Entry_Body_Active");
			this.classList.toggle("OverviewListToggle_Active");
		});
	}
});

function ToggleOverview() {
	SetOverviewState(
		!document
			.getElementById("OverviewList")
			.classList.contains("OverviewList_Collapsed")
	);
}

function HideOverview() {
	SetOverviewState(true);
}

function SetOverviewState(IsHidden) {
	if (IsHidden) {
		document
			.getElementById("OverviewList")
			.classList.add("OverviewList_Collapsed");

			document.getElementById("OverviewCollapseImage").setAttribute("src", "/Resources/Icons/plus.png");
	} else {
		document
		.getElementById("OverviewList")
		.classList.remove("OverviewList_Collapsed");

		document.getElementById("OverviewCollapseImage").setAttribute("src", "/Resources/Icons/minus.png");
	}
}
