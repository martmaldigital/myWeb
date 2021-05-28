function digitalclock()
{
  var elmnt=document.getElementById("clock");
  var timenow=new Date();

  elmnt.innerHTML=timenow.toLocaleTimeString();
}
window.onload=function()
{
  setInterval(digitalclock,1000)
};