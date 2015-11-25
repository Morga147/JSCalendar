$(document).ready(function(){
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

  function calendarEvents(event){
    $.each(event, function(key, value){
      var eventName = key;
      var minutes = (value.end - value.start);
      var start = minutesToHours(value.start);
      var end = minutesToHours(value.end);
      $(".calendarContainer").append("<div class='newEvent clearfix' id="+eventName+"><p><span>"+eventName+"<br/></span>Start: "+start +", End: "+end+"</p></div>");
      $("#"+eventName).css({"height":minutes+"px", "top":value.start+"px", "left":0, "width":600});
    });
  }

  function collisions(event1, event2){
    var start1 = event1.start;
    var start2 = event2.start;
    var end1 = event1.end;
    var end2 = event2.end;
    // check if event2 starts at or during event1
    if(start1 <= start2 < end1){
      return true;
    // check if event1 and event2 are at the same time
    } else if(start1 == start2 && end1 == end2){
      return true;
    // check if event1 starts at or during event2
  } else if(start2 <= start1 < end2){
      return true;
    } else{
      return false;
    }
  }

  function collisionStyles(){

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

  $.ajax({
    method: 'GET',
    url: 'https://appcues-interviews.firebaseio.com/calendar/events.json',
    dataType: 'json',
    success: function(result, status){
      console.log("Success!", result, status);
      calendarEvents(result);
    }
  });

})();
