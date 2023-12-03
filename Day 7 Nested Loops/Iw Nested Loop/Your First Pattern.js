
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

//question
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function yourFirstPattern(n) {
    // Write code here
    for (i=0; i< n; i++){
        let bag = ""
        for(j=0; j<n; j++){
            bag+= "*" + " "
        }
        console.log(bag)
    }
}

yourFirstPattern(6)