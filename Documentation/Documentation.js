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
