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

// function checkMediaQuery() {
//     // If the inner width of the window is greater then 768px
//     if (window.innerWidth < 900) {
//       // Then log this message to the console
//       console.log('Media Query Matched!')
//     }
//   }

function case_resize() {
    var  row1 = document.getElementsByClassName("row-1");
    var row2 = document.getElementsByClassName("row-2");
    if (window.innerWidth < 820) {
        console.log(row1.className);
        // row1[0].className += "-mobile";
        // row2.className += "-mobile";
        // console.log(row1[0].className);
    }
    else {
        row1.className = "row-1"
        // row2.className = "row-2"
    }

    
}

case_resize();