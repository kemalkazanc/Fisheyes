const initpXDropdown = () => {
  const dropdownElements = document.querySelectorAll(".px-dropdown");
  const chevronTurn = document.getElementsByClassName("dropdown__chevron")[0];
  //console.log("icon", chevronTurn);


  window.addEventListener("click", () => {
    dropdownElements.forEach((item) => {
      item.classList.remove("active");
      chevronTurn.classList.add(".active");
    });
  });

  dropdownElements.forEach((item) => {
    // dropdownValue c'est la valeur "data-value"
    const dropdownValue = item.querySelector(".px-dropdown-value");

    // dropdownInput  c'est la div qui englode les options
    const dropdownInput = item.querySelector(".px-dropdown-input");

    // dropdownPanelOptions c'est le li de la liste
    const dropdownPanelOptions = item.querySelectorAll(".px-dropdown-panel ul li");


    dropdownInput.addEventListener("click", (event) => {
      event.stopPropagation();
      item.classList.toggle("active");
    });
    dropdownPanelOptions.forEach((dropdownPanelOptionItem) => {
      dropdownPanelOptionItem.addEventListener("click", () => {
        dropdownInput.querySelector("input").value = dropdownPanelOptionItem.innerHTML;
        dropdownValue.value = dropdownPanelOptionItem.getAttribute("data-value");
      });
    });
  });
};
initpXDropdown();
