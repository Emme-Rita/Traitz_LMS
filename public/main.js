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

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JS', 'REACT', 'VUE JS', 'GitHub'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


// upload video

  document.getElementById("input").addEventListener("change", function(){
    var media = URL.createObjectURL(this.files[0]);
    var video = document.getElementById("video");
    video.src = media
    video.style.display = "block";
    video.play();
  });
