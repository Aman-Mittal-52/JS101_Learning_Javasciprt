
// Wrote By Aman MIttal

function oddSumBelowN(num) {
    // Write code here
    let sum = 0;
    for(i = 1; i <= num; i+= 2)
    {
        sum = sum + i;
    }
    console.log(sum);
}

oddSumBelowN(7)