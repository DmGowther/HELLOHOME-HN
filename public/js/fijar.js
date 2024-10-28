window.onscroll = function () {
  miFuncion();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

console.log(sticky);

function miFuncion() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fijar");
  } else {
    navbar.classList.remove("fijar");
  }
}
