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
        let promise = new Promise((resolve) => {
            const randomSeconds = Math.floor(Math.random() * 5) + 1;
            setTimeout(() => {
                if (selectedItems.includes("burger" && "fries" && "drinks")) {
                    alert("all");
                }
                else if (selectedItems.includes("burger" && "fries")) {
                    alert("sukha")
                }
                else if (selectedItems.includes("burger" && "drinks")) {
                    alert("no allu")
                }
                else if (selectedItems.includes("fries" && "drinks")) {
                    alert("happy")
                }
                else if (selectedItems.includes("burger")) {
                    alert("burbur")
                }
                else if (selectedItems.includes("fries")) {
                    alert("furfur")
                }
                else if (selectedItems.includes("drinks")) {
                    alert("gugu")
                }
                else {
                    alert("gdr")
                }
            }, randomSeconds * 1000);

        });
        return promise;
    }

});









// if (itemBurger.checked == true && itemDrink.checked == true && itemFries.checked == true) {
//     alert("all selected");
// }