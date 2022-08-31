// When the user scrolls the page, execute myFunction
window.onscroll = function() {myStickyPanel()};

// Get the navbar
var panel = document.getElementById("stickyPanel");

// Get the offset position of the navbar
var sticky = panel.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myStickyPanel() {
  if (window.pageYOffset >= sticky) {
    panel.classList.add("sticky")
  } else {
    panel.classList.remove("sticky");
  }
}