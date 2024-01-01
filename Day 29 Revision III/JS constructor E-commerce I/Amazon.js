


// Author ~ Aman Mittal
// LinkedIn ~ https://www.linkedin.com/in/aman-mittal-22833b288/


function Listing(name, category, imageUrl, price) {
    this.name = name;
    this.category = category;
    this.imageUrl = imageUrl;
    this.price = price;
    this.sold = false;
}

function getFormData() {
    let name = document.getElementById("name").value
    let category = document.getElementById("category").value;
    let imageUrl = document.getElementById("image").value;
    let price = document.getElementById("price").value;
    addListing(name, category, imageUrl, price)
}

function addListing(input, category, image, price) {
    let data = new Listing(input, category, image, price)
    let arr = JSON.parse(localStorage.getItem('Products')) || [];
    arr.push(data)
    localStorage.setItem('Products', JSON.stringify(arr))
    return arr
}

window.onload = function () {
    let form = document.getElementById("form")

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        getFormData()
    })
    //  get the form here and add submit event and handle the preventDefault
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
    module.exports = {
        Listing,
        addListing,
    };
}
