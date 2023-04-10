function toggle() {
    var x = document.getElementById("navbar");
    
    if (x.className === "nav") {
        x.className += " responsive";
    }
    else {
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


function mobileFormat() {
    var z = document.getElementById("navbar")

    if (window.innerWidth < 840) {

        z.outerHTML =
        `<div class="nav" id="navbar">
            <a href="/" id="logo" title="logo">phish<div class="lighter">eye</div></a> 
            <div class="links">
            <a href="about" title="about">about</a>
            <a href="#works" title="works">works</a>
            <a href="#contact" title="contact">contact</a>
            <a href="javascript:void(0);" title="Menu" class="icon" onclick="toggle()">&#9776;</a>
            </div>
        </div>
        `
    }

    else {

        z.outerHTML = 
        `<div class="nav home" id="navbar">
                <a href="/" id="logo" title="logo">phish<div class="lighter">eye</div></a> 
                <div class="links">
                <a href="about" title="about">about</a>
                <a href="#works" title="works">works</a>
                <a href="#contact" title="contact">contact</a>
                <a href="javascript:void(0);" title="Menu" class="icon" onclick="toggle()">&#9776;</a>
                </div>
            </div>`
    }

}
