let sidebar_toggle = document.querySelector("#sidebar-toggle");
let sidebar = document.getElementById("sidebar");
let content = document.querySelector("#content");
sidebar_toggle.addEventListener("click", () => {
  let sidebarWidth = window.getComputedStyle(sidebar).width;
  if (sidebarWidth === "250px") {
    sidebar.style.width = "0";
    content.style.marginRight = "0";
  } else {
    sidebar.style.width = "250px";
    content.style.marginRight = "250px";
  }
});
