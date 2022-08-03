document.addEventListener("DOMContentLoaded", CalculateProgessBars);

function CalculateProgessBars() {
  let ProgressBoxes = document.getElementsByClassName("ProgressBox");

  for (
    let ProgressBoxIndex = 0;
    ProgressBoxIndex < ProgressBoxes.length;
    ProgressBoxIndex++
  ) {
    const ProgressBox = ProgressBoxes[ProgressBoxIndex];
    let EntryLists = ProgressBox.getElementsByClassName("ProgressBox_Entries");

    let CompletedCount = 0;
    let EntryCount = 0;
    for (
      let EntryListIndex = 0;
      EntryListIndex < EntryLists.length;
      EntryListIndex++
    ) {
      const EntryList = EntryLists[EntryListIndex];

      for (
        let EntryIndex = 0;
        EntryIndex < EntryList.children.length;
        EntryIndex++
      ) {
        const Entry = EntryList.children[EntryIndex];
        EntryCount++;
        if (Entry.classList.contains("Entry_Completed")) {
          CompletedCount++;
        }
      }
    }

    let Percentage = ((CompletedCount / EntryCount) * 100).toFixed() + "%";
    if (EntryCount == 0) {
      Percentage = "100%";
    }

    let ProgressBarInners =
      ProgressBox.getElementsByClassName("ProgressBar_Inner");
    for (let PBIIndex = 0; PBIIndex < ProgressBarInners.length; PBIIndex++) {
      const PBI = ProgressBarInners[PBIIndex];
      PBI.style.width = Percentage;
    }

    let ProgressBarTexts =
      ProgressBox.getElementsByClassName("ProgressBar_Text");

    for (let PBTIndex = 0; PBTIndex < ProgressBarTexts.length; PBTIndex++) {
      const PBT = ProgressBarTexts[PBTIndex];
      PBT.innerHTML = Percentage;
    }
  }
}
