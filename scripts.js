jQuery(function(){

  function dateHeader(){
    var newDate = new Date();
    var monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var month = newDate.getMonth(); //Returns # from 0-11(Jan-Dec)
    var year = newDate.getFullYear(); //2015
    var day = newDate.getDate(); //21(st)
    var weekday = newDate.getDay(); //Return # from 0-6(Sun-Sat)
    var daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var finalDate = daysArray[weekday]+" "+monthsArray[month]+" "+day+", "+year;
    document.getElementById("currentDate").innerHTML = finalDate;
  }
  dateHeader();

  var listOfEvents = {
      event1: {start: 60, end: 120},  // an event from 10am to 11am
      event2: {start: 100, end: 240}, // an event from 10:40am to 1pm
      event3: {start: 700, end: 720}  // an event from 8:40pm to 9pm
  }

  function calendarEvents(event){
    $.each(event, function(key, value){
      var eventName = key;
      var start = minutesToHours(value.start);
      var end = minutesToHours(value.end);
      $(".calendarContainer").append("<div class='newEvent'><h3>"+eventName+"</h3><p>Start: "+start +", End: "+end+"</p></div>");
    });
  }

  function minutesToHours(minutes){
    var hour = Math.floor(minutes / 60) + 9;
    var min = minutes % 60;
    if(hour >= 13){  // convert from 24 to 12 hour clock
      hour = (hour-12);
      if(min<10){  // Add PM and pad w/ extra 0 if necessary
        min = min+"0PM";
      } else{
        min = min + "PM";
      }
    } else if (min<10){ // Add AM and pad w/ extra 0 if neccessary
      min = min+"0AM";
    } else {
      min = min + "AM";
    }
    return(hour+":"+min);
  }

  calendarEvents(listOfEvents);

})();
