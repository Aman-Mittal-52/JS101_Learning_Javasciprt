
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

//question
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16

function patternOfN(N) {
    // Write code here
    let start = 1;
    for (let i = 0; i < N; i++) {
       let bag = '';
        for (let j = 0; j < N; j++) {
          bag += start + ' ';
          start++;
        }
        console.log(bag);
    }
}

patternOfN(4)