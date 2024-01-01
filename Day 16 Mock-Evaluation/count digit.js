function countZerosOnesTwos(N,arr){
    //write code here
    let count0 = 0
    let count1 = 0
    let count2 = 0;
    let output =[];
    for(i=0;i<N;i++){
        let char = arr[i]
       
            if(char==0){
                count0++
            }
            else if(char==1){
                count1++
            }
            else if(char==2){
                count2++
            }
       
    }
        output.push(count0)
        output.push(count1)
        output.push(count2)
    console.log(count0+" "+count1+" "+count2+" ")
}


countZerosOnesTwos(8, [2,0,2,0,1,2,1,0])
