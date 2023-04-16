Handlebars.registerPartial('navbar', '{{navbar}}');

{ navbar: `<div id="navbar" class="nav">
<a href="/" id="logo" title="logo">phish<div class="lighter">eye</div></a> 
<div class="links">
<a href="about" title="about">about</a>
<a href="#work" title="work">work</a>
<a href="#contact" title="contact">contact</a>
<a href="javascript:void(0);" title="Menu" class="icon" onclick="toggle()"><i class="fa-solid fa-bars"></i></a>
</div>
</div>` }