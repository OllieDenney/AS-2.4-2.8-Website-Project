function showDiv() {
  var x = document.getElementById("dropdown");
  var y = document.getElementById("dropdown-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
	y.innerHTML = "✖"
  }
  else {
    x.style.display = "none";
	y.innerHTML = "☰"
  }
}



window.onscroll = function(){
	var a = document.getElementById("nav-container");
	var b = document.getElementById("sign-in-button-outline");
	var c = document.getElementById("sign-in-button");
	var d = document.getElementById("sign-in-button-outline");
  var e = document.getElementById("dropdown");
	var top = window.scrollY;
	console.log(top);
	if (top >= 100){
		a.style.background = "white";
		a.style.color = "#ff00e7";
		b.style.border = "2px solid #ff00e7";
		c.style.color = "#ff00e7";
    e.style.background = "linear-gradient(0deg, rgba(0,0,0,0) 20%, rgba(255,255,255,1) 30%)";
	}else{
		a.style.background = "transparent";
		b.style.border = "2px solid white";
		c.style.color = "white";
		a.style.color = "white";
    e.style.background = "transparent";
	}
}
