function niceArray(N, array, K) {
    //write code here
    let count = 0
    for (let i = 0; i < N; i++) {
        if (array[i] % 2 === 0) {
            count++
        }
    }
    if (count > K) {
        console.log("Nice Array");
    }
    else {
        console.log("Bad Array");
    }
}

let arr = [1, 4, 6, 7, 8, 4]
let lenght = arr.lenght;

niceArray(lenght, arr, 1) //Output ~ Nice Array 
// Array have more even elements than the K Value 

niceArray(lenght, arr, 5) //Output ~ Bad Array 
// Array didn't have more even elements than the K Value 