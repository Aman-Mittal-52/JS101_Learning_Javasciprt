


// Author ~ Aman Mittal
// LinkedIn ~ https://www.linkedin.com/in/aman-mittal-22833b288/


function generateNumber() {
  // generate a random integer(hint : Math.random)
  const randomNum = Math.floor(Math.random() * 100) + 1;
  const div = document.getElementById("number");
  div.textContent = randomNum;
  checkOddEven(randomNum)
}

function checkOddEven(num) {
  // logic for even / odd
  let divOfEvenOdd = document.getElementById("odd-even");
  if (num % 2 == 0) {
    divOfEvenOdd.textContent = "The number is even"
    return "The number is even"
  }
  else {
    divOfEvenOdd.textContent = "The number is odd"
    return "The number is odd"
  }
}

window.onload = function () {
  // add event listeners to the button here
  const button = document.getElementById("generate-number");
  button.addEventListener("click", generateNumber)

};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
