/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function dropdown() {
    var x = document.getElementById("Navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }