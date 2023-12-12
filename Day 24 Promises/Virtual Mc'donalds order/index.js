document.addEventListener("DOMContentLoaded", function () {

    let orderBtn = document.getElementById("orderBtn");

    orderBtn.addEventListener("click", () => {
        const selectedItems = Array.from(document.querySelectorAll('.itemBox input:checked')).map(input => input.value);
        if (selectedItems.length == 0) {
            alert("Thanks for playing with the button..Now order something :)")
        }
        else (
            orderfood(selectedItems)
        )
    });

    function orderfood(selectedItems) {

        const randomSeconds = Math.floor(Math.random() * 5) + 1;

        let image = document.getElementById("foodjpg");
        let status = document.getElementById("status");

        const MYpromise = new Promise((resolve) => {

            status.textContent = `Your Order Id #${OrderId()}...........`
            setTimeout(() => {
                if (selectedItems.includes("burger") && selectedItems.includes("fries") && selectedItems.includes("drinks")) {
                    status.textContent = "Please Wait!!...Your Food is being Ready"
                    setTimeout(() => {
                        resolve("success")
                        status.textContent = "Thank You for Order Our Combo-Pack"
                        image.setAttribute("src", "https://mcdonalds.co.nz/sites/mcdonalds.co.nz/files/deluxe_cheeseburger_combo-1.png")
                    }, 2000);
                }
                else if (selectedItems.includes("burger") && selectedItems.includes("fries")) {
                    status.textContent = "Please Wait!!...Your Food is being Ready"
                    setTimeout(() => {
                        resolve("Success")
                        status.textContent = `Thank you for Your order of Burger and Fries`
                        image.setAttribute("src", "https://www.frugalfeeds.nz/wp-content/uploads/2018/09/CheeseburgerSmallFries_hero.png");
                    }, 2000);
                }
                else if (selectedItems.includes("burger") && selectedItems.includes("drinks")) {
                    status.textContent = "Please Wait!!...Your Food is being Ready"
                    setTimeout(() => {
                        resolve("Success")
                        status.textContent = "Here is Your Burger and Drink";
                        image.setAttribute("src", "https://freepngclipart.com/thumb/burger/80281-hamburger-coke-fries-french-burger-diet-coca-cola-thumb.png");
                    }, 2000);
                }
                else if (selectedItems.includes("fries") && selectedItems.includes("drinks")) {
                    status.textContent = "Please Wait!!...Your Food is being Ready"
                    setTimeout(() => {
                        resolve("Success")
                        status.textContent = `here's your Salted Fries and Coke :)`;
                        image.setAttribute("src", "https://img.over-blog-kiwi.com/0/98/03/83/20160618/ob_266fb1_mini-500-197559.png");
                    }, 2000);
                }
                else if (selectedItems.includes("burger")) {
                    status.textContent = "Please Wait!!...Your Food is being Ready"
                    setTimeout(() => {
                        resolve("Success")
                        status.textContent = "Order Of A Veg-Burger :)"
                        image.setAttribute("src", "https://freepngimg.com/thumb/sandwich/70545-king-hamburger-food-mcdonald's-cheeseburger-fast-burger.png")
                    }, 2000);
                }
                else if (selectedItems.includes("fries")) {
                    status.textContent = "Please Wait!!...Your Food is being Ready"
                    setTimeout(() => {
                        resolve("Success")
                        status.textContent = "Order Of Salted Fries :)"
                        image.setAttribute("src", "https://mcdonalds.com.lb/storage/menu-ingredients/April2020/9VCkqs4QQK9C1OS5HyvR.png")
                    }, 2000);
                }
                else if (selectedItems.includes("drinks")) {
                    status.textContent = "Please Wait!!...Your Food is being Ready"
                    setTimeout(() => {
                        resolve("Success")
                        status.textContent = "Order Of Coke\' :)"
                        image.setAttribute("src", "https://www.kimberley.co.za/wp-content/uploads/2018/12/McDonalds-mcd-food-beverages-soft-drinks-coke-PM.png")
                    }, 2000);
                }
            }, randomSeconds * 1000);
        });
        console.log(MYpromise)
        setTimeout(()=>{
            console.log(MYpromise)
        },8000)
        return MYpromise;
    }
    
});

function OrderId() {
    let randomNum = Math.floor(Math.random() * 1000) + 2;
    return randomNum
}