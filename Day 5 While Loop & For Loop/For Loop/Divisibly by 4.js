
// Wrote by Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

function divisibleByK(num,k) {
    //write code here
    for(i= 1; i<= num; i++)
    {
        if(i % k===0)
        {
           console.log(i) 
        }
    }
}

divisibleByK(34,2)