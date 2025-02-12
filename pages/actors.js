let header = document.getElementById("header");
let dark = document.getElementById("modeDark");
let Bodyi = document.getElementById("Boody");
let hide = document.getElementById('Hide');
let bars = document.getElementById("Baars")
const checkbox = document.getElementById("checkbox")
let mainHeaderNews = document.getElementById("mainHeaderNews");
const progressBar = document.getElementById("progress-bar");

let darkmode = localStorage.getItem("darkmode");


mainHeaderNews.onclick = () =>{
  window.location.href = "../index.html"; // ضع رابط الصفحة التي تريد الانتقال إليها
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
    <a href="../index.html#About" onclick="hidder()">About</a>
    <a href="news.html" onclick="hidder()">News</a>
    <a href="#" onclick="hidder()">Actor</a>
    <a href="../index.html#conTact" onclick="hidder()">Contact</a>
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



const API_KEY = '10c7ddd30110ef0d45bf2550669166fa';
const BASE_URL = "https://api.themoviedb.org/3/person/popular";
const div1 = document.getElementById('Div-0');

if (!div1) {
  console.error("Element with id 'Div-0' not found in the DOM");
}

function fetchActorDetails(actorId, dival) {
  const DETAILS_URL = `https://api.themoviedb.org/3/person/${actorId}?api_key=${API_KEY}&language=en-US`;

  fetch(DETAILS_URL)
    .then(res => res.json())
    .then(data => {
      let birthday = data.birthday || "Unknown";
      let birthPlace = data.place_of_birth || "Unknown";

      let birthDate = document.createElement("p");
      birthDate.id = "born";
      birthDate.textContent = `Born: ${birthday}`;

      let birthLocation = document.createElement("p");
      birthLocation.id = "place-of-birth";
      birthLocation.textContent = `Place of Birth: ${birthPlace}`;

      dival.appendChild(birthDate);
      dival.appendChild(birthLocation);
    })
    .catch(error => console.error(`Error fetching details for actor ${actorId}:`, error));
}



function fetchActors(page) {
  const URL = `${BASE_URL}?q=man&api_key=${API_KEY}&language=en-US&page=${page}`;

  fetch(URL)
    .then(res => res.json())
    .then(data => {
      if (!data.results) {
        throw new Error("API response is missing 'results'");
      }

      data.results.forEach(actor => {
        let name = actor.name || "Unknown";
        let department = actor.known_for_department || "No department available";
        let imageUrl = actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : null;

        if (!name || !department || !imageUrl) {
          return;
        }

        let actorDiv = document.createElement("div");
        actorDiv.classList.add("div1");

        let flexDiv = document.createElement("div");
        flexDiv.classList.add("div2flex");

        let image = document.createElement("img");
        image.src = imageUrl;
        image.alt = name;
        image.style.width = "100%";

        let title = document.createElement("p");
        title.id = "title";
        title.textContent = `Actor: ${name}`;

        let description = document.createElement("p");
        description.id = "Price";
        description.textContent = `Department: ${department}`;

        let dival = document.createElement("div");
        dival.class = "divAll";
        dival.id = "divAll";

        flexDiv.appendChild(image);
        flexDiv.appendChild(dival);
        // flexDiv.appendChild(description);


        // dival.appendChild()
        dival.appendChild(title);
        dival.appendChild(description);

        actorDiv.appendChild(flexDiv);
        div1.appendChild(actorDiv);

        fetchActorDetails(actor.id, dival);
      });
    })
    .catch(error => console.error('Error fetching actors:', error));
}

fetchActors(2);






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