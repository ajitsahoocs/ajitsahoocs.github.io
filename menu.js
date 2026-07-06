// menu.js

document.addEventListener("DOMContentLoaded", function () {
  // Select all nav links inside your menu
  const navLinks = document.querySelectorAll("nav ul li a");
  const checkBox = document.getElementById("check");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Uncheck the checkbox to collapse the menu
      if (checkBox.checked) {
        checkBox.checked = false;
      }
    });
  });
});
