function toggle() {
    var x = document.getElementById("navbar");
    
    if (window.innerWidth < 840) {
      if (x.className === "nav") {
          x.className += " responsive";
      }
      else {
          x.className = "nav";
      }
  }
}

function randomBGColor() {
    var colorCode = ["url('../media/stacked-waves-purple.svg')","url('../media/stacked-waves-yellow.svg')"]; // colors
    var className = document.getElementsByClassName("change"); // class name to random color
  for (var i = 0; i < className.length; i ++) {
      className[i].style.backgroundColor = colorCode[Math.floor(Math.random() * colorCode.length)]; 
  }
}

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "flex";
    elmnt.style.backgroundColor = color;
  }

