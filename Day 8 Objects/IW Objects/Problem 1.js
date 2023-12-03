
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

// Problem 1
// https://false-trouser-16e.notion.site/Problem-1-d0d782da0f8d4fafb9043dfb9748069b


let person = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age = [32, 30, 26, 28, 44];
let result = [];
for(let i=0; i<person.length; i++){
  let obj = {}
  obj.name = person[i]
  obj.age= age[i]
  result.push(obj);
}
console.log(result)