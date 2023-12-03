
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

//question

function oddSumAgain(num) {
    // Write code here
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            if (j % 2 === 1) {
               sum += j;
            }
        }
        console.log(sum);
    }
}

oddSumAgain(4)