function sumOfMultiples(X, K, Y) {
    //write code here
    let Sum = 0;
    for (i = 1; i <= K; i++) {
        let multi = i * X;
        if (multi % Y === 0) {
            Sum += multi;
        }
    }
    console.log(Sum);
}


sumOfMultiples(3,10,5)

//output ~ 45