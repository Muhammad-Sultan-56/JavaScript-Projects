

const API_KEY = "5d6d261d9b7e4593b2d3d1c7e98e0584";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews('pakistan'));

async function fetchNews(query) {
    let res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    let data = await res.json();
    bindData(data.articles)
}

function bindData(articles){
    const cardContainer = document.getElementById("card-container");
    const cardContainerTemaplate = document.getElementById("card-container-template");

    cardContainer.innerHTML = "";

articles.forEach(article => {
    if(!article.urlToImage) return;
    const cardClone = cardContainerTemaplate.content.cloneNode(true);
    cardContainer.appendChild(cardClone);
});
}