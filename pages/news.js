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
  window.location.href = "../index.html";
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
    <a href="#NEWs" onclick="hidder()">News</a>
    <a href="Actors.html" onclick="hidder()">Actor</a>
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


  const proxyUrl = "https://api.allorigins.win/raw?url=";
  const API_KEY = '7e006b2717bc54dd0639a0e21ca1835c';
  const url = `https://gnews.io/api/v4/search?q=Hollywood&lang=en&token=${API_KEY}`;

  fetch(proxyUrl + encodeURIComponent(url))
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const articles = data.articles;
      const div1 = document.getElementById('Div-0');

      if (!div1) {
        throw new Error("Element with id 'Div-0' not found in the DOM");
      }

      div1.innerHTML = '';

      articles.forEach(article => {
        const titleText = article.title;
        const descriptionText = article.description || 'No description available.';
        const imageUrl = article.image || 'https://via.placeholder.com/500'; 

        if (!titleText || !descriptionText || !imageUrl) {
          return;
        }

        let articleDiv = document.createElement("div");
        articleDiv.classList.add("div1");

        let flexDiv = document.createElement("div");
        flexDiv.classList.add("div2flex");

        let title = document.createElement("p");
        title.id = "title";
        title.textContent = titleText;

        let description = document.createElement("p");
        description.id = "Price";
        description.textContent = descriptionText;

        let image = document.createElement("img");
        image.src = imageUrl;
        image.alt = "Article Image";
        image.style.width = "100%";

        flexDiv.appendChild(image);
        flexDiv.appendChild(title);
        flexDiv.appendChild(description);
        articleDiv.appendChild(flexDiv);
        div1.appendChild(articleDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching news:', error);
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
