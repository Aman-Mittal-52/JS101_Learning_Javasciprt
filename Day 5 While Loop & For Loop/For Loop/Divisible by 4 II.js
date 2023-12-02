
// Wrote by Aman mittal

function divisibleByKII(num,k) {
    //write code here
    let sum = 0;
    for(i = 1; i<= num; i++)
    {
        if(i % k === 0)
        {
            sum = sum + i;
        }
    }
    console.log(sum);
}

