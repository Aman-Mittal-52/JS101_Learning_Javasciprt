let button = document.getElementById("apiBtn");

button.addEventListener("click", fetchData);

function fetchData() {
    fetch("https://reqres.in/api/users")
        .then((myResponse) => {
            return myResponse.json();
        })
        .then((mydata) => {
            let mydataArray = mydata.data;

            mydataArray.forEach(element => {
                let root = document.querySelector(".root");

                let divCard = document.createElement("div");
                divCard.setAttribute("class", "card")

                root.append(divCard)

                let id = document.createElement("p");
                id.textContent = `#${element.id}`
                divCard.append(id);

                let imgDiv = document.createElement("div");
                imgDiv.setAttribute("class", "img")

                let img = document.createElement("img")
                img.setAttribute("src", element.avatar)

                imgDiv.append(img)
                divCard.append(imgDiv)

                let userDetail = document.createElement("div");
                userDetail.setAttribute("class", "user-detail")

                let firstN = document.createElement("h3")
                firstN.textContent = element.first_name
                let lastN = document.createElement("h3")
                lastN.textContent = element.last_name

                let email = document.createElement("p")
                email.textContent = element.email

                userDetail.append(firstN, lastN, email);
                divCard.append(userDetail)
            })
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}