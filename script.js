/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function dropdown() {
    var x = document.getElementById("NavbarPages");
    var y = document.getElementById("Navbar")
    if (x.className === "navbarPages") {
      x.className += " responsive";
    } else {
      x.className = "navbarPages";
    }

    /* 
    if (y.className === "navbar") {
      y.className += " responsive";
    } else {
      y.className = "navbar";
    }
    */
  }