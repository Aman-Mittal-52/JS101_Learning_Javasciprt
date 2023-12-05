
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

// Create an object with the following functionality

// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.


let details = {
    data: [],
    addStudent: function(name, english, maths, science) {
      let obj = {};
      obj.name = name;
      obj.eng = english;
      obj.math = maths;
      obj.sci = science;
      this.data.push(obj);
    },
    findStudentHighestTotal: function() {
      if (this.data.length === 0) {
        console.log("No students added.");
        return;
      }
  
      let maxTotal = -Infinity;
      let studentHighestTotal = null;
  
      for (let i = 0; i < this.data.length; i++) {
        let studentData = this.data[i];
        let total = studentData.eng + studentData.math + studentData.sci;
  
        if (total > maxTotal) {
          maxTotal = total;
          studentHighestTotal = studentData.name;
        }
      }
  
      console.log("Student with the highest total marks:", studentHighestTotal);
    },
    findStudentLeastTotal: function() {
      if (this.data.length === 0) {
        console.log("No students added.");
        return;
      }
  
      let minTotal = Infinity;
      let studentLeastTotal = null;
  
      for (let i = 0; i < this.data.length; i++) {
        let studentData = this.data[i];
        let total = studentData.eng + studentData.math + studentData.sci;
  
        if (total < minTotal) {
          minTotal = total;
          studentLeastTotal = studentData.name;
        }
      }
  
      console.log("Student with the least total marks:", studentLeastTotal);
    }
  };
  
  details.addStudent("Nitin", 90, 90, 90);
  details.addStudent("Ganesh", 50, 90, 100);
  details.addStudent("Ashish", 40, 40, 50);
  
  details.findStudentHighestTotal();
  details.findStudentLeastTotal();