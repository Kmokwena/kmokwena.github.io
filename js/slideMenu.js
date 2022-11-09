function openSlideMenu() {
  document.getElementById("menu").style.width = "250px";
  document.getElementsByClassName("fa-bars")[0].style.opacity = "0";
}
function closeSlideMenu() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("content").style.marginLeft = "0";
  document.getElementsByClassName("fa-bars")[0].style.opacity = "1";
}
