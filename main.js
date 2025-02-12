let header = document.getElementById("header");
let dark = document.getElementById("modeDark");
let Bodyi = document.getElementById("Boody");
let hide = document.getElementById('Hide');
let bars = document.getElementById("Baars");
const checkbox = document.getElementById("checkbox");
let mainHeaderAbout = document.getElementById("mainHeaderAbout");
const progressBar = document.getElementById("progress-bar");
let aboutDiv = document.getElementById("mainAboutDiv");
let contactDiv = document.getElementById("Contacting");


let darkmode = localStorage.getItem("darkmode");


mainHeaderAbout.onclick = () =>{
  window.location.href = "index.html";
}


window.addEventListener("scroll", () => {
  requestAnimationFrame(() => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + "%";
  });
});


if (window.scrollY >= 10) {
  header.style.background = "#202a35";
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.style.background = "#202a35";
  } else {
    header.style.background = "transparent";
  }
});



function darking() {
  Bodyi.classList.add("bodyDark");
  localStorage.setItem("darkmode", "active");
}

function lighting() {
  Bodyi.classList.remove("bodyDark");
  localStorage.setItem("darkmode", null);
}

if (darkmode === "active") darking();

checkbox.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? darking() : lighting();
});



function hiddden(){
  if(hide.innerHTML === ''){
    hide.innerHTML = `
    <a href="#About" onclick="hidder()">About</a>
    <a href="pages/news.html" onclick="hidder()">News</a>
    <a href="pages/Actors.html" onclick="hidder()">Actor</a>
    <a href="#conTact" onclick="hidder()">Contact</a>
    `
  if (window.scrollY < 10) {
    header.style.background = "#202a35";
  }
  bars.setAttribute("class","fa-solid fa-xmark")
}
else{
  hide.innerHTML = '';
  if (window.scrollY < 10) {
    header.style.background = "transparent";
  }
  bars.setAttribute("class","fa-solid fa-bars")
  }
}



function hidder(){
  hide.innerHTML = '';
  bars.setAttribute("class","fa-solid fa-bars")
}



// ============================================================================================


const video = document.getElementById("videoAbout");

    video.addEventListener("ended", function (){
        video.currentTime = 0;
        video.pause();
});






// ============================================================================================
  let btn = document.getElementById("btn0012");

window.onscroll = () => {
  if (scrollY >= 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = () => {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};