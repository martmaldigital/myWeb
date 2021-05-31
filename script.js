
//function to display daily greetings
let day;
switch (new Date().getDay()) {
  case 0:
    day = "a Marvellous Sunday.";
    break;
  case 1:
    day = "a Beautiful Monday.";
    break;
  case 2:
    day = "an Excellent Tuesday.";
    break;
  case 3:
    day = "a Peaceful Wednesday.";
    break;
  case 4:
    day = "an Awesome Thursday.";
    break;
  case 5:
    day = "a Good Friday.";
    break;
  case  6:
    day = "an Amazing Saturday.";
}
document.getElementById("greet").innerHTML = "Welcome to " + day;

//function to display current time
function digitalclock()
{
  let displayTime=document.getElementById("clock");
  let timenow=new Date();

  displayTime.innerHTML=timenow.toLocaleTimeString();
}
window.onload=function()
{
  setInterval(digitalclock,1000)
};

// function to open the side/close navigation and open/close contact me modal
let modal1 = document.getElementById("contact_me");
let openContact = document.getElementById("contactMe");
let closeContact = document.getElementById("close_contact");
let sideNav = document.getElementById("side-menu");
let openNav = document.getElementById("nav-open");
let closeNav = document.getElementById("nav-close");
let closeNavLink = document.getElementById("nav-link");

openNav.onclick = function() {
  sideNav.style.width='250px';
  sideNav.style.height='250px';
}
 closeNav.onclick = function() {
   sideNav.style.width='0';
   sideNav.style.marginLeft='0';
 }
 closeNavLink.onclick = function() {
  sideNav.style.width='0';
  sideNav.style.marginLeft='0';
 }

openContact.onclick = function() {
  modal1.style.display = "block";
}
closeContact.onclick = function() {
  modal1.style.display = "none";
}

// function to open/close about me modal
let modal2 = document.getElementById("about_me");
let openAbout = document.getElementById("aboutMe");
let closeAbout = document.getElementById("close_about");

openAbout.onclick = function() {
  modal2.style.display = "block";
}
closeAbout.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target==modal2) {
    modal2.style.display = "none";
  }
}

// function to open/close what-I-do
let modal3 = document.getElementById("what_me");
let openWhat = document.getElementById("whatMe");
let closeWhat = document.getElementById("close_what");

openWhat.onclick = function() {
  modal3.style.display = "block";
}
closeWhat.onclick = function() {
  modal3.style.display = "none";
}

// function to open/close experience
let modal4 = document.getElementById("exp_me");
let openExp = document.getElementById("expMe");
let closeExp = document.getElementById("close_exp");

openExp.onclick = function() {
  modal4.style.display = "block";
}
closeExp.onclick = function() {
  modal4.style.display = "none";
}

// function to open/close education
let modal5 = document.getElementById("edu_me");
let openEdu = document.getElementById("eduMe");
let closeEdu = document.getElementById("close_edu");

openEdu.onclick = function() {
  modal5.style.display = "block";
}
closeEdu.onclick = function() {
  modal5.style.display = "none";
}

// function to open/close testimonials
let modal6 = document.getElementById("test_me");
let openTest = document.getElementById("testMe");
let closeTest = document.getElementById("close_test");

openTest.onclick = function() {
  modal6.style.display = "block";
}
closeTest.onclick = function() {
  modal6.style.display = "none";
}

