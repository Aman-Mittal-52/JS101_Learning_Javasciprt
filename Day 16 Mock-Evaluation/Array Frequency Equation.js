function arrayFrequencyEquationXI(N, arr) {
    //Write your code here!
    let count=0;
    for (i=0;i<N;i++){
        let bag = 0;
        let num = arr[i]
        for(j=0;j<N;j++){
            if(num==j){
                bag = count
                count++
            }
            
        }
    }
    console.log(bag)
    console.log(count)
   }
   

   