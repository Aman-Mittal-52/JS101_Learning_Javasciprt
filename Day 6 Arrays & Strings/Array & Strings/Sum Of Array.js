
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/


function ArraySum(n, arr){
    //write code here
    let sum = 0;
    for(i=0; i < n; i++)
    {
        sum = sum + arr[i];
    }
    console.log(sum);
}

ArraySum(5,[8,7,6,54,4])