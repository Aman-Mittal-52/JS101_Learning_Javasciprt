let isTimeout;

window.onload = function () {
    let searchInput = document.getElementById("searchBar");
    searchInput.addEventListener("keyup", () => {
        debounce(Main, 1000);
    })

    let searchBtn =  document.getElementById("img");
    searchBtn.addEventListener("click",()=>{
        debounce(Main,1000)
    })
}

function debounce(callback, delay) {
    if (isTimeout) {
        clearTimeout(isTimeout);
    }
    isTimeout = setTimeout(() => {
        callback();
    }, delay);
}

async function getData(name) {
    try {
        let APIkey = 'c16a23a2';
        let res = await fetch(`http://www.omdbapi.com/?apikey=${APIkey}&s=${name}`);
        let data = res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function Main() {
    let movieName = document.getElementById("searchBar").value;
    let container = document.getElementById("content");
    container.innerHTML = "";
    let data = await getData(movieName);
    let searchedData = data.Search;

    if (searchedData) {
        searchedData.forEach(element => {
            getCard(element);
        });
    } else {
        console.warn(`Movie search failed. Please enter a logical "Name" or check your query.`)
        console.warn("No search results found.");
    }
}

function getCard(ele) {
    let contentDiv = document.getElementById("content");

    let card = document.createElement("div");
    card.setAttribute("class", "cards");

    let poster = document.createElement("img");
    poster.setAttribute("src", ele.Poster);
    poster.setAttribute("alt", "PosterImage");

    let title = document.createElement("h4");
    title.textContent = ele.Title;

    let info = document.createElement("p");
    info.textContent = ele.Year;

    card.append(poster, title, info);
    contentDiv.append(card)
}