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
    var y = document.getElementById("intro");
    var z = document.getElementById("navbar");

    if (window.innerWidth < 840) {
        // y.outerHTML = 
        // `<div id="intro">

        //     <div class="content-frame intro">
        //         <h1>Hi, I'm Kiara!</h1>
        //         <p1>I’m on a mission to find the intersection of my artistic pursuits and technical skills.</p1>
        //     </div>


        //     <div class="content-frame experience">
        //         <h3>I have experience in:</h3>
        //         <p2>
        //             <ul>
        //                 <li>full-stack web development.</li>
        //                 <li>software engineering.</li>
        //                 <li>graphic design.</li>
        //                 <li>photography.</li>
        //             </ul>   
        //         </p2>
        //     </div>


        // </div>
        // `
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

        // y.outerHTML = 
        // `<div id="intro" class="content-frame">
        //     <div class="content intro">
        //         <h1>Hi, I'm Kiara!</h1>
        //         <p1>I’m on a mission to find the intersection of my artistic pursuits and technical skills.</p1>
        //     </div>
        //     <div class="content experience">
        //         <h3>I have experience in:</h3>
        //         <p2>
        //             <ul>
        //                 <li>full-stack web development.</li>
        //                 <li>software engineering.</li>
        //                 <li>graphic design.</li>
        //                 <li>photography.</li>
        //             </ul>   
        //         </p2>
        //     </div>
        // </div>`

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

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.boxShadow = "unset";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
    document.getElementById(pageName).style.boxShadow = "0px 10px #1b1b1b;"
  }
  
//   // Get the element with id="defaultOpen" and click on it
//   document.getElementById("defaultOpen").click();
