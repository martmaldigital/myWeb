
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

// function to open the side/close navigation and open/close modal
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

window.onclick = function(event) {
  if (event.target==modal1) {
    modal1.style.display = "none";
  }
}
