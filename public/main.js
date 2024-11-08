const menu = document.getElementById("menu")
const hamburger = document.querySelector(".fa-bars")
hamburger.addEventListener("click",() =>{
    menu.classList.toggle("active")
    if (active){
        hamburger.classList.replace("fa-bars","fa-times")

    }
})

const visibility = document.querySelector(".fa-eye-slash")
const password = document.getElementById("password")

visibility.addEventListener("click", () =>{
    if (password.type === 'password'){
        password.type = 'text'
        visibility.classList.replace('fa-eye-slash','fa-eye')

    }else{
        password.type = 'password' 
        visibility.classList.replace('fa-eye','fa-eye-slash')


    }
})

//   count down timer

var countdowndate = new Date("Nov 10, 2024 00:00:00").getTime()
var x = setInterval(function(){
    var now = new Date().getTime()
    var distance = countdowndate - now


    var hours = (Math.floor(distance / (1000 * 60 * 60)) + "h")
    if(hours < 10){ hours = "0" + hours}


    var minutes = (Math.floor((distance % (1000 *60 * 60)) / (1000 * 60)) + "m")
    if(minutes < 10){ minutes = "0" + minutes}


    var seconds = (Math.floor((distance % (1000 * 60) / 1000 )) + "s")
    if(seconds < 10){ seconds = "0" + seconds}

    document.getElementById("hour").innerHTML = hours
    document.getElementById("minute").innerHTML = minutes
    document.getElementById("second").innerHTML = seconds

}, 1000)