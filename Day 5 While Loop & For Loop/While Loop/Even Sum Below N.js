
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

function evenSumBelowN(num) {
    // Write code here
    let sum = 0;
    let i = 2;
    while(i <= num)
    {
        sum = sum + i;
        i++
    }
    console.log(sum)
}

evenSumBelowN(9)