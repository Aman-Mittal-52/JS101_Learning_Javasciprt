let phoneNum = document.getElementById("phoneNum");
let amount = document.getElementById("inputAmount");


let btn = document.getElementById("sendBtn");

btn.addEventListener("click", paymentPromise)


function paymentPromise() {
    let Mypayment = new Promise((resolve , reject)=>{
        if(phoneNum.value >= 7000000000 && amount.value <= 100000 ){
            loader()
            setTimeout(() => {
                resolve("Payment true")
                paymentSuccess()
            }, 5500);
        }
        else{
            loader()
            setTimeout(() => {
                reject("Payment false")
                paymentFail()
            }, 5500);
        }
    })
    console.log(Mypayment)
    Mypayment
    .then((resolv)=>{
        console.log(resolv);
    })
    .catch((err)=>{
        console.log(err);
    })
    setTimeout(()=>{
        console.log(Mypayment);
    },6000)
}

function paymentSuccess() {
    let screen = document.getElementById("transaction");

    const payDiv = document.createElement("div");
    payDiv.setAttribute("id", "payDiv");

    screen.append(payDiv);

    let success_icon = document.createElement("i");

    success_icon.innerHTML = "&#10004;"
    success_icon.style.fontSize = "40px";
    success_icon.style.color = "#45a049";
    success_icon.style.fontFamily = "'Poppins', sans-serif"

    let heading = document.createElement("h2");
    heading.textContent = "Payment Successful"
    heading.setAttribute("class","success_fail_Heading")

    payDiv.append(success_icon,heading)
    setTimeout(()=>{
        payDiv.remove(),12000
    },6000)
}

function paymentFail() {
    let screen = document.getElementById("transaction");

    const payDiv = document.createElement("div");
    payDiv.setAttribute("id", "payDiv");

    screen.append(payDiv);

    let fail_icon = document.createElement("i");

    fail_icon.innerHTML = "&#10008;"
    fail_icon.style.fontSize = "40px";
    fail_icon.style.color = "red";
    fail_icon.style.fontFamily = "'Poppins', sans-serif";

    let heading = document.createElement("h2");
    heading.textContent = "Transaction Failed"
    heading.setAttribute("class","success_fail_Heading")

    payDiv.append(fail_icon,heading)

    setTimeout(()=>{
        payDiv.remove(),12000
    },6000)
}



function loader() {
    let screen = document.getElementById("transaction");

    const payDiv = document.createElement("div");
    payDiv.setAttribute("id", "payDiv");

    screen.append(payDiv);

    const loader = document.createElement("div");
    loader.setAttribute("class", "loader");

    const status = document.createElement("h3");
    status.textContent = "Checking Balance";
    payDiv.append(loader, status);

    loader.style.animation = "spin 2s infinite";
    setTimeout(() => {
        payDiv.remove()
    }, 5500)
}