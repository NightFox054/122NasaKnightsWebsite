function dropdown() {
    var x = document.getElementById("NavbarPages");
    if (x.className === "navbarPages") {
      x.className += " responsive";
    } else {
      x.className = "navbarPages";
    }

  }

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset; //somehow this redundancy is necessary
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("Navbar").style.top = "0";
  } else {
    document.getElementById("Navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}