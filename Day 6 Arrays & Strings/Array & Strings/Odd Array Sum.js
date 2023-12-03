
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/


function oddArraySum(n, arr){
    //write code here
    let sum = 0;
    for(i=0; i<n; i++)
    {
        if(arr[i] % 2 === 1)
        {
            sum += arr[i];
        }
    }
    console.log(sum)
}

oddArraySum(5,[1,5,7,523,6])