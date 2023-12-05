
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

// Write a custom function that has the same behavior of inbuilt Array Slice Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function slice(nameArr,start , end){
    let arr =[];
    if(start==undefined&&end == undefined){
      return nameArr;
    }
    else if(start >=0 && end ==undefined){
      for(let i = start; i<nameArr.length;i++){
        arr.push(nameArr[i])
      }
      return arr;
    }
    else if (start>=0&& end >= nameArr.lenght){
      for(let i = start; i<nameArr.length;i++){
        arr.push(nameArr[i])
      }
      return arr;
    }
    else if(start >=0 && end <= nameArr.length){
      for(let i = start; i<end;i++){
        arr.push(nameArr[i])
      }
      return arr;
    }
    else if (start < 0 && end == undefined){
      for(let i = nameArr.length + start;i<nameArr.length;i++){
        arr.push(nameArr[i])
      }
      return arr;
    }
  }
  const arr = ['Aman','pappu', 'rohan', 'chunnu','khachri'];
  console.log(slice(arr,3, 4))