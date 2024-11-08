const menu = document.getElementById("menu");
const hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("fa-bars");
  hamburger.classList.toggle("fa-times");
});

const visibility = document.querySelector(".fa-eye-slash");
const password = document.getElementById("password");

// visibility.addEventListener("click", () => {
//   if (password.type === "password") {
//     password.type = "text";
//     visibility.classList.replace("fa-eye-slash", "fa-eye");
//   } else {
//     password.type = "password";
//     visibility.classList.replace("fa-eye", "fa-eye-slash");
//   }
// });

//   count down timer
//"Nov 20, 2024 00:00:00"
let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");

// Check if countdown date exists in localStorage
let countdowndate = localStorage.getItem("countdowndate");

if (!countdowndate) {
  // If not, set it to 24 hours from now and store it
  countdowndate = new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000
  ).getTime();
  localStorage.setItem("countdowndate", countdowndate);
} else {
  // If it exists, parse it to a Date object
  countdowndate = parseInt(countdowndate, 10);
}

function updateCountdown() {
  // Get the current time on the PC
  let now = new Date().getTime();

  // Calculate the difference in milliseconds between countdowndate and now
  let distance = countdowndate - now;

  // Calculate hours, minutes, and seconds remaining
  let hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((distance % (1000 * 60)) / 1000);

  // Display with leading zeros for single-digit values
  hours.innerHTML = (hrs < 10 ? "0" : "") + hrs;
  minutes.innerHTML = (mins < 10 ? "0" : "") + mins;
  seconds.innerHTML = (secs < 10 ? "0" : "") + secs;

  // Stop the countdown when it reaches zero
  if (distance < 0) {
    clearInterval(countdownInterval);
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    // Optionally, clear countdown date from localStorage
    localStorage.removeItem("countdowndate");
  }
}

// Start updating the countdown every second
let countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately
updateCountdown();

// var x = setInterval(function () {
//   var now = new Date().getTime();
//   var distance = countdowndate - now;

//   var hours = Math.floor(distance / (1000 * 60 * 60)) + "h";
//   if (hours < 10) {
//     hours = "0" + hours;
//   }

//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + "m";
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   var seconds = Math.floor((distance % (1000 * 60)) / 1000) + "s";
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }

//   //   document.getElementById("hour").innerHTML = hours;
//   //   document.getElementById("minute").innerHTML = minutes;
//   //   document.getElementById("second").innerHTML = seconds;
// });

console.log("Hello World");
