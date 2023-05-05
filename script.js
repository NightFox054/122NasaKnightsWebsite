/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function dropdown() {
    var x = document.getElementById("NavbarPages");
    if (x.className === "navbarPages") {
      x.className += " responsive";
    } else {
      x.className = "navbarPages";
    }

  }