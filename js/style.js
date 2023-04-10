function toggle() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function randomBGColor() {
    var color = '#';
    var colorCode = ['F6D085','FFAC89','C5CBE3']; // colors
    var className = document.getElementsByClassName("change"); // class name to random color
    var i;
    color += colorCode[Math.floor(Math.random() * colorCode.length)];
  for (var i = 0; i < className.length; i ++) {
      className[i].style.backgroundColor = color; }
}
