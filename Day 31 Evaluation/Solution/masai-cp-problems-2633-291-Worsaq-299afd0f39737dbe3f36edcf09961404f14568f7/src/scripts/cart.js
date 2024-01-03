window.onload = function () {
    renderBasic()
    renderCard()
}


function renderBasic() {
    let total = localStorage.getItem("price")
    let h2 = document.getElementById("cart_total");

    h2.textContent = total;
}


function renderCard(){
    function renderCard(fetchData) {
        let container = document.getElementById("items")
        let arr = fetchData.data.forEach(element => {
            let card = createCard(element)
            container.append(card)
        });
    }
}