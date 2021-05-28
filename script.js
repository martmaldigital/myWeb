
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
// function to open the side navigation
function openSlideMenu(){
  document.getElementById('side-menu').style.width='250px'
  document.getElementById('side-menu').style.height='250px';
 
}
function closeSlideMenu(){
  document.getElementById('side-menu').style.width='0';
  document.getElementById('main').style.marginLeft='0';
}