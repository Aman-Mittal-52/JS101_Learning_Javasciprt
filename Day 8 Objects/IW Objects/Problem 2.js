
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

// Problem 2
// https://false-trouser-16e.notion.site/Problem-2-39c86c51591a464b8ffd199653bc9b6d

let arr = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];

for (let i=0; i< arr.length; i++) {

 

let max = 0;

let name;

for (let j = 0; j < arr[i].students.length; j++) {  

let total_marks = 0;

for (let k = 0; k < arr[i].students[j].marks.length; k++) { 
  
  total_marks += arr[i].students[j].marks[k]; }

 

if (max < total_marks) { 
  
  max = total_marks;
  name= arr[i].students[j].name;
   }
 }
console.log(arr[i].grade + "-" + name + "-" + max);
}