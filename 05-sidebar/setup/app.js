//selecting the side bar toggle button

const sidebartogglebutton = document.querySelector(".sidebar-toggle");

//selecting the close button
const closeSideBarButton = document.querySelector(".close-btn");

//selecting the side bar
const sidebar = document.querySelector(".sidebar");

//event listener to sidebar toggle button on right
sidebartogglebutton.addEventListener("click", SidebarCheck);

//adding event listener to side bar close button
closeSideBarButton.addEventListener("click", CloseSideBar);

function SidebarCheck() {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
}

//fuinction to close the side bar
function CloseSideBar() {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    return;
  }
}
