document.addEventListener("DOMContentLoaded", function () {
    const btndropdown = document.getElementById("btn-dropdown");
    const dropdownmenu = document.getElementById("dropdown-menu");
  
    btndropdown.addEventListener("click", function () {
      dropdownmenu.classList.toggle("hidden");
    });
  
    document.addEventListener("click", function (event) {
      if (
        !btndropdown.contains(event.target) &&
        !dropdownmenu.contains(event.target)
      ) {
        dropdownmenu.classList.add("hidden");
      }
    });
  });