function getTimeRemaining(endtime) {
  console.log(endtime)
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  console.log(days);
  console.log(hours);
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
var numbers = ["digit-one num-zero","digit-one num-one","digit-one num-two","digit-one num-three","digit-one num-four","digit-one num-five","digit-one num-six","digit-one num-seven","digit-one num-eight","digit-one num-nine"];


function extractDigits(number){
    var c = number.toString();
    return c;
}


function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpant = clock.children[1];
  var daysSpanu = clock.children[2];
  var hoursSpant = clock.children[4];;
  var hoursSpanu = clock.children[5];;
  var minutesSpant = clock.children[7];;
  var minutesSpanu = clock.children[8];;
  var secondsSpant = clock.children[10];;
  var secondsSpanu = clock.children[11];;

  function updateClock() {
    var t = getTimeRemaining(endtime);
    var days =  extractDigits(t.days);
    var hours = ('0' + t.hours).slice(-2);
    var minutes = ('0' + t.minutes).slice(-2);
    var seconds = ('0' + t.seconds).slice(-2);
    daysSpant.className = numbers[parseInt(days[0])];
    daysSpanu.className = numbers[parseInt(days[1])];
    hoursSpant.className = numbers[parseInt(hours[0])];
    hoursSpanu.className = numbers[parseInt(hours[1])];
    minutesSpant.className = numbers[parseInt(minutes[0])];
    minutesSpanu.className = numbers[parseInt(minutes[1])];
    secondsSpant.className = numbers[parseInt(seconds[0])];
    secondsSpanu.className = numbers[parseInt(seconds[1])];
    // hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    // minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    // secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
var endtime = new Date(2017,0,6)
var deadline = new Date((endtime.getTime()));

initializeClock('timer', deadline);
