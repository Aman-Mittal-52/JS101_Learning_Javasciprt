let data = [];
let fecthCountries = async () => {
  // make an API
  return data;
};

let countryCard = (el) => {
  let cardDiv = document.createElement("div");
  // create a div element for each card and append the details

  return cardDiv;
};

let renderData = (data) => {
  let container = document.getElementById("all_countries");

  // loop through the cards and append to main container
  return container;
};

let sortLogic = (order, data) => {
  // handle sort logic here and return sorted data
  // it expectes two arguments type of sort (asc or desc) and data
  return data;
};
let filterByRegionLogic = (data, regionName) => {
  // handle filter logic here and return filtered data
  // it expectes two arguments data and region
  // return filteredData
};
let handleSortAndFilter = () => {};
window.onload = function () {
  // onload fetch Countries from the `https://restcountries.com/v3.1/all`
  // add change event listeners to sort and filter
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
