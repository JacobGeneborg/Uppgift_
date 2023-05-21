// Navbar fade
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function n() {
  var t = document.getElementById("namne").value;
  document.getElementById("outputNamne").innerHTML = t;
}

function e() {
  var t = document.getElementById("e-post").value.split("@").join(" @");
  document.getElementById("outpute").innerHTML = t;
}

function d() {
  var t = document.getElementById("datum").value;
  document.getElementById("outputd").innerHTML = t;
}

function nu() {
  var t = document.getElementById("number").value;
  document.getElementById("outputnu").innerHTML = t;
}

function toggleMenu() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");
}

