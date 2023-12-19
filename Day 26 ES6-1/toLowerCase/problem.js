let toLowerCase = (array) => {
    let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let small = "abcdefghijklmnopqrstuvwxyz"
    let output = [];
    for (let i = 0; i < array.length; i++) {
        let bag = "";
        let currentWord = array[i];
        for (let j = 0; j < currentWord.length; j++) {
            for (let k = 0; k < caps.length; k++) {
                if (currentWord[j] == caps[k]) {
                    bag += small[k];
                }
                if (currentWord[j] == " ") {
                    bag += " ";
                    break;
                }
                if (currentWord[j] == small[k]) {
                    bag += currentWord[j];
                }
            }
        }
        output.push(bag)
    }
    return output
}


let arr = ["Aman", "AMAN", "HELLO WORLD"];

let result = toLowerCase(arr)
console.log(result)