
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

//question
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

function yourFirstNested(num) {
    // Write code here
    for(i=1; i<=num; i++)
    {
        let bag = "";
        for(j=1; j<=num; j++){
            bag += j + " ";
        }
        console.log(bag);
    }
}

yourFirstNested(5)