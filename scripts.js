window.onload = function(){
  var newDate = new Date();
  var monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var month = newDate.getMonth(); //Returns # from 0-11(Jan-Dec)
  var year = newDate.getFullYear(); //2015
  var day = newDate.getDate(); //21(st)
  var weekday = newDate.getDay(); //Return # from 0-6(Sun-Sat)
  var daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var finalDate = daysArray[weekday]+" "+monthsArray[month]+" "+day+", "+year;
    console.log("var finalDate: "+finalDate);
  document.getElementById("current_date").innerHTML = finalDate;
}
