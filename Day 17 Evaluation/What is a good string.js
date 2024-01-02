function GoodString(N, str) {
  //write code here
  let count=0;
  let strCount=0;
  for(let i=0; i<N;i++){
      if(i%2==1){
         if(str[i]!==str[i+1]){
             count++
             strCount++
         }
         else if(str[i]==str[i+1]){
             count++
         }
      }
      
  }
  console.log(0)
  
  if(count==strCount){
      console.log("Bad")
  }
  else{
      console.log("good")
  }
}


GoodString(4, "Aman")