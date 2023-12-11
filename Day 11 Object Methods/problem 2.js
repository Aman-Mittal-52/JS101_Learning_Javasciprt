

// Code Author - Aman Mittal 
// Linkdin --> https://www.linkedin.com/in/aman-mittal-22833b288/


function createProduct(name, quantity, price) {
    return {
        name: name,
        quantity: quantity,
        price: price,
    };
}

function calculateTotal(cart) {
    let total = 0;
    for (let product of cart) {
        total += product.quantity * product.price;
    }
    return total;
}

let names = ["Rice", "Dal", "Salt"];
let quantities = [2, 3, 1];
let prices = [60, 50, 20];

let cart = [];
for (let i = 0; i < names.length; i++) {
    let product = createProduct(names[i], quantities[i], prices[i]);
    cart.push(product);
}

let total = calculateTotal(cart);
console.log("Total value of the cart: " + total);
console.log("⤵️")
console.log(cart)