
//  Code Author --> Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/


let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let sum = 0;
let count = 0;

let output = arr.filter(function(ele,ind) {
    if(ind%2==0){
        sum += ele;
        count++
    }
  return sum/count
})
console.log(output)

