
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/


function reverseArrayTraversal(n, arr){
    //write code here
      let a = arr.reverse();
      let bag = "";
      for (i=0; i<n; i++)
      {
          bag+= arr[i] + " ";
      }
      console.log(bag)
}

reverseArrayTraversal(6,[6,568,64,56,24,84])