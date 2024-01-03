// The items should be stored in local storage with key :- “items”
// The items should be stored in local storage with key :- “items”
let data;
async function fetchData() {
    try {
        let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries");
        data = await res.json();
        renderCard(data)
        return data;
    } catch (error) {
        return error
    }
}

function renderCard(fetchData) {
    let container = document.getElementById("items")
    let arr = fetchData.data.forEach(element => {
        let card = createCard(element)
        container.append(card)
    });
}



function createCard(ele) {
    let img = document.createElement("img");
    img.src = ele.image

    let name = document.createElement("h3");
    name.textContent = ele.name;

    let price = document.createElement("h5")
    price.textContent = ele.price;

    let btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.setAttribute("class", "add_to_cart")

    let card = document.createElement("div");
    card.setAttribute("class", "item")
    card.append(img, name, price, btn)

    return card
}


 async function fetchDataOnly(){
    try {
        let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries");
        data = await res.json();
        return data
    } catch (error) {
        return error
    }
}

async function storeData() {
    let allbtns = document.querySelectorAll('.add_to_cart')
    let data = await fetchDataOnly()
    let arr = data.data
    let item = 0;
    let cartData = [];
    let total=0;
    for (let i = 0; i < allbtns.length; i++) {
        allbtns[i].addEventListener("click", () => {
            item++
            document.getElementById("item_count").textContent = item;
            total += arr[i].price
            cartData.push(arr[i])
            localStorage.setItem("items",JSON.stringify(cartData))
            localStorage.setItem("price",JSON.stringify(total))
        })
    }

}


window.onload = async function () {
    await fetchData()
    storeData()
}