function Nobita(N, str) {
    //write code here
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let arr = [];
    for (let i = 0; i < N; i++) {
        if (str[i] === "a") {
            countA++
        }
        else if (str[i] === "b") {
            countB++
        }
        else if (str[i] === "c") {
            countC++;
        }
    }
    arr.push(countA);
    arr.push(countB);
    arr.push(countC);
    let max = -Infinity;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] >= max) {
            max = arr[j];
        }
    }

    if (arr[0] === max) {
        console.log("a")
    }
    else if (arr[1] === max) {
        console.log("b")
    }
    else if (arr[2] === max) {
        console.log("c")
    }


}


Nobita(5, "abcaa")