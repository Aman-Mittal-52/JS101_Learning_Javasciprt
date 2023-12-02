
//Wrote by Aman mittal

function sumOfMultiples(n,k,y) {
    //write code here
    let sum = 0;
    for(i= 1; i<=k; i++){
        if((i*n)%y===0)
        {
            sum = sum + (i*n)
        }
    }
        console.log(sum);
}

sumOfMultiples(3,10,5)