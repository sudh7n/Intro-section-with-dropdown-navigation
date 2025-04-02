function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("active");
}

function hideSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("active");
}

function toggleFeatureDropDown() {
  const dropDown = document.querySelector(".features-dropdown");
  const image = document.querySelector(".up-down-svg");

  if (dropDown) {
    if (dropDown.style.display === "block") {
      dropDown.style.display = "none";
      image.src = "./images/icon-arrow-down.svg"; // Set image to down arrow
    } else {
      dropDown.style.display = "block";
      image.src = "./images/icon-arrow-up.svg"; // Set image to up arrow
    }
  }
}

function toggleCompanyDropDown() {
  const companyDropDown = document.querySelector(".company-dropdown");
  const image2 = document.querySelector(".down-up-svg");

  if (companyDropDown) {
    if (companyDropDown.style.display === "block") {
      companyDropDown.style.display = "none";
      image2.src = "./images/icon-arrow-down.svg";
    } else {
      companyDropDown.style.display = "block";
      image2.src = "./images/icon-arrow-up.svg";
    }
  }
}
