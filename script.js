function showDiv() {
  var x = document.getElementById("dropdown");
  var y = document.getElementById("dropdown-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}
