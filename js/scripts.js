function openNav() {
  var x = document.getElementById("navigation");

  if (x.className === "navigation") {

    x.className += " menujs";
    document.getElementById("menuicon").innerHTML = "&Cross;";


  } else {
    x.className = "navigation";
    document.getElementById("menuicon").innerHTML = "&#9776;";
  }



  
}