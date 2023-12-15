let button = document.getElementById("btn");

button.addEventListener("click", func)

function func() {

    let name = document.getElementById("name");
    let age = document.getElementById("age");

    localStorage.setItem("Name", name.value)
    localStorage.setItem("Age", age.value)
}