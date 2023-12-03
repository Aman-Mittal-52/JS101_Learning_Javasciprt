
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

//question
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5

function rightAngleTriangle(N) {
    // Write code here
    for(i=N; i<=1; i--){
        let bag = "";
        for(j=N; j<=i; j--){
            bag += "* "
        }
        console.log(bag)
    }
}

rightAngleTriangle(5)