
window.addEventListener('load', function() {
    let showN = document.getElementById("showName");
    let showA = document.getElementById("showAge");

    let storedName = localStorage.getItem("Name")
    let storedAge = localStorage.getItem("Age")

    showN.textContent = `Name : ${storedName}`
    showA.textContent = `Age : ${storedAge}`
});

setTimeout(()=>{
    localStorage.clear()
},20000)