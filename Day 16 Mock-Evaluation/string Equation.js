function StringEquation(N, str) {
    //write code here
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
  
        let countS = 0;
        let countU = 0;
        for(i=0;i<N;i++){
            for(j=0;j<lower.length; j++){
                if(str[i]==lower[j]){
                    countS++;
                }
            }
        }
  
    
   
        for(i=0;i<N;i++){
            for(j=0;j<lower.length; j++){
                if(str[i]==upper[j]){
                    countU++;
                }
            }
        }
    
    
    
   console.log(5*countS + 3*countU)
  }


  StringEquation(4,"Aman")