// document.getElementById('orderBtn').addEventListener('click', () => {
//     const selectedItems = Array.from(document.querySelectorAll('#foodOptions input:checked')).map(input => input.value);

//     if (selectedItems.length === 0) {
//         alert('Please select at least one item to order.');
//         return;
//     }

//     orderFood(selectedItems)
//         .then(orderId => displayOrderResult(orderId))
//         .catch(error => console.error(error));
// });

// function orderFood(selectedItems) {
//     return new Promise((resolve) => {
//         const randomSeconds = Math.floor(Math.random() * 5) + 1; // Random time between 1 to 5 seconds

//         setTimeout(() => {
//             const orderId = generateOrderId();
//             resolve(orderId);
//         }, randomSeconds * 1000);
//     });
// }

// function generateOrderId() {
//     return Math.floor(Math.random() * 1000) + 1;
// }

// function displayOrderResult(orderId) {
//     const orderResultDiv = document.getElementById('orderResult');
//     orderResultDiv.innerHTML = `<p>Your order #${orderId} is ready!</p>`;

//     const foodImage = document.createElement('img');
//     foodImage.src = 'path_to_food_image.jpg'; // Replace with the actual path to your food image
//     foodImage.alt = 'Food Image';
//     foodImage.className = 'foodImage';
//     orderResultDiv.appendChild(foodImage);
// }



document.getElementById('orderBtn').addEventListener('click', () => {
    const selectedItems = Array.from(document.querySelectorAll('#foodOptions input:checked')).map(input => input.value);

    if (selectedItems.length === 0) {
        alert('Please select at least one item to order.');
        return;
    }
    else{

        orderFood()
        .then(result => displayOrderResult(result))
        .catch(error => console.error(error));
    }
});

function orderFood() {
    const x = new Promise((resolve) => {
        const randomSeconds = Math.floor(Math.random() * 5) + 1; // Random time between 1 to 5 seconds

        setTimeout(() => {
            const orderId = generateOrderId();
            const foodImage = 'https://th.bing.com/th/id/OIP.cbExHEBoI5yiZc9_WtzJ-gHaFW?rs=1&pid=ImgDetMain'; // Replace with the actual path to your food image
            resolve({ orderId, foodImage });
        }, randomSeconds * 1000);
    });1
    return x
}

function generateOrderId() {
    return Math.floor(Math.random() * 1000) + 1;
}

function displayOrderResult(result) {
    const orderResultDiv = document.getElementById('orderResult');
    orderResultDiv.innerHTML = `<p>Your order #${result.orderId} is ready!</p>`;

    const foodImage = document.createElement('img');
    foodImage.setAttribute("src" , "")
    foodImage.src = result.foodImage;
    foodImage.alt = 'Food Image';
    foodImage.className = 'foodImage';
    orderResultDiv.appendChild(foodImage);
}
