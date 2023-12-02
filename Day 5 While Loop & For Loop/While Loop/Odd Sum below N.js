
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/


function oddSumBelowN(num) {
    // Write code here
    let sum = 0;
    let i = 1;
    while(i <= num)
    {
        sum = sum + i;
        i+= 2
    }
    console.log(sum)
}

oddSumBelowN(23)