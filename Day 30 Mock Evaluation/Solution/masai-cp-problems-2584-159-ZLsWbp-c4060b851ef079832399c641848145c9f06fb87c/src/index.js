let data = [];
let isFilter = false;
let isSort = false;

let fecthCountries = async () => {
  try {
    let response = await fetch("https://restcountries.com/v3.1/all");
    data = await response.json();
    renderData(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

let countryCard = (el) => {
  let cardDiv = document.createElement("div");

  let img = document.createElement("img");
  img.setAttribute("src", el.flags.png);

  let name = document.createElement("h3");
  name.textContent = el.name.common;

  let population = document.createElement("p");
  population.textContent = `Population ${el.population}`;

  let region = document.createElement("p");
  region.textContent = `Region ${el.region}`;

  let capital = document.createElement("p");
  capital.textContent = `Capital ${el.capital}`;

  cardDiv.append(img, name, population, region, capital);
  return cardDiv;
};

let renderData = (data) => {
  let container = document.getElementById("all_countries");
  container.innerHTML = "";
  data.forEach((ele) => {
    let newCardDIV = countryCard(ele);
    container.append(newCardDIV);
  });
  return container;
};

let sortLogic = (order, data) => {
  if (order == "asc") {
    data.sort((a, b) => a.population - b.population);
  } else if (order == "desc") {
    data.sort((a, b) => b.population - a.population);
  }
  renderData(data);
};

let filterByRegionLogic = (data, regionName) => {
  let newData = data.filter((country) => country.region === regionName);
  renderData(newData);
};

let handleSortAndFilter = async () => {
  await fecthCountries();

  if (isSort) {
    sortLogic(document.getElementById("sort_population").value, data);
  }
  if (isFilter) {
    filterByRegionLogic(data, document.getElementById("filter_region").value);
  }
};

window.onload = async function () {
  await handleSortAndFilter();

  let sortChange = document.getElementById("sort_population");
  sortChange.addEventListener("change", async () => {
    isSort = true;
    await handleSortAndFilter();
  });

  let regionChange = document.getElementById("filter_region");
  regionChange.addEventListener("change", async () => {
    isFilter = true;
    await handleSortAndFilter();
  });
};

if (typeof exports !== "undefined") {
  module.exports = {
    renderData,
    handleSortAndFilter,
    sortLogic,
    filterByRegionLogic,
    fecthCountries,
  };
}