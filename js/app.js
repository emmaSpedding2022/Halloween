var countDownDate = new Date("oct 31 2023");
var x = setInterval(function() {

var now = new Date()
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("countdown").innerHTML = "Halloween is here in " + days + " days ";

// If the count down is finished, write some text
if (distance < 0) {
  clearInterval(x);
  document.getElementById("countdown").innerHTML = "You Missed Halloween this year";
}
});
console.log(emma);
