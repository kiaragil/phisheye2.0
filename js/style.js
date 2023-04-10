function toggle() {
    var x = document.getElementById("navbar");
    console.log(x);
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


function mobileFormat() {
    var x = document.getElementById("mobilecase1");
    var y = document.getElementById("mobilecase2");
    

    if (window.innerWidth < 840) {

        x.outerHTML = `
        <div id="mobilecase1" class="content case half">
            <h2>S.U.N.N.</h2>
            <div class="case-type"><p3>WEB DEV</p3></div>
            <p3>
            S.U.N.N. is a San Francisco organization dedicated 
            to empowering residents through garden education and food literacy.
            I was approached me to develop and launch a website that was informative 
            and accesible. I also helped develop their logo that appears throughout 
            the site itself.
            <div class="view-project"><a href="https://sunnsf.org/">VIEW SITE</a></div>
            </p3>                           
            <img src="media/sunnsforg-case.png">
        </div>`;

        y.outerHTML = 
        `<div id="mobilecase2" class="content case half">
            <h2>Hoply</h2>
            <div class="case-type"><p3>WEB DEV</p3></div>
            <p3>
            Hoply is a project made to practice
            CRUD operations. It is is a very simple text-based social media. Users were able to create an
            account and then make, edit, react to- posts. I developed the app on Android studio with Java and SQL.
            <div class="view-project"><a href="https://github.com/kiaragil/HoplyApp">VIEW PROJECT</a></div>
            </p3>                    
            <img src="media/hoply-case.png">
        </div>`;  
    }

    else {
        x.outerHTML = 
        `<div id="mobilecase1" class="content case full">
            <div class="row-1">
                <h2>S.U.N.N.
                    <div class="case-type"><p3>WEB DEV</p3></div>
                </h2>
                <p3>
                    S.U.N.N. is a San Francisco organization dedicated 
                    to empowering residents through garden education and food literacy.
                    I was approached me to develop and launch a website that was informative 
                    and accesible. I also helped develop their logo that appears throughout 
                    the site itself.
                    <div class="view-project"><a href="https://sunnsf.org/">VIEW SITE</a></div>
                </p3>                           
                </div>
            <img src="media/sunnsforg-case.png">
        </div>`

        y.outerHTML = 
        `<div id="mobilecase2" class="content case full">
            <div class="row-1">
                <h2>
                Hoply
                <div class="case-type"><p3>SOFTWARE DEV/WEB DEV</p3></div>
                </h2>
                <p3>Hoply is a project made to practice
                    CRUD operations. It is is a very simple text-based social media. Users were able to create an
                    account and then make, edit, react to- posts. I developed the app on Android studio with Java and SQL.
                    <div class="view-project"><a href="https://github.com/kiaragil/HoplyApp">VIEW PROJECT</a></div>
                </p3>                      
            </div>
            <img src="media/hoply-case.png">
        </div>`
    }

}
