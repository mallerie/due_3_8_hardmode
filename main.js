var theClock = document.querySelector('.clock');
var theClockBackground = document.querySelector('body');

var printHexTime = function() {

  var currentDate = new Date();
  
  var hour = ((currentDate.getHours() < 10) ? "0" + currentDate.getHours() : currentDate.getHours()).toString(16);
  var min = ((currentDate.getMinutes() < 10) ? "0" + currentDate.getMinutes() : currentDate.getMinutes()).toString(16);
  var sec = ((currentDate.getSeconds() < 10) ? "0" + currentDate.getSeconds() : currentDate.getSeconds()).toString(16);

  var hexColor = (hour + min + sec).toUpperCase();
  theClock.innerHTML = hexColor;
  

  theClockBackground.style.backgroundColor = '#' + hexColor;
  
}

var intervalID = window.setInterval(printHexTime, 1000);