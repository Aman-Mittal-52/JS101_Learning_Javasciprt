let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", showMovies);

let inputMovie = document.getElementById("searchInput");
inputMovie.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

let key = "c16a23a2";

function showMovies() {
    let inputMovie = document.getElementById("searchInput");
    let output = "";

    fetch(`https://www.omdbapi.com/?apikey=${key}&t=${inputMovie.value}`)
        .then((res) => res.json())
        .then((Mydata) => {
            if (Mydata.Title !== undefined) {
                let detailsBox = document.querySelector(".details");
                output += `<div class="imgBox">
                                <img src=${Mydata.Poster}">
                            </div><div class="info">
                            <h1>${Mydata.Title}</h1>
                            <div class="about">
                                <div class="genre-year">
                                    <h5>${Mydata.Genre}</h5>
                                    <h5>${Mydata.Year}</h5>
                                </div>
                                <h6>${Mydata.Rated}</h6>
                            </div>
                                <p>${Mydata.Plot}</p>
                            </div>`;
                detailsBox.innerHTML = output;
            }
            else{
                alert("Enter a Valid Movie Name")
            }
        });
}
