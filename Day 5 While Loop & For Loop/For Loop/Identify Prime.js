
// Wrote by Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

function identifyPrime(num) {
    // Write code here
    let count = 0;
    for(i=1; i<=num; i++)
    {
        if(num%i===0)
        {
            count++;
        }
    }
    if(count == 2)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }
}

identifyPrime(13)