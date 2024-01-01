function squarePattern(N) {
    // Write code here
    for(i=1;i<N+1;i++){
        let bag ="";
        for(j=1;j<N+1;j++){
            if(i==1||i==N||j==1||j==N){
                bag = bag + "* ";
            }
            else
            {
                bag = bag + "  ";
            }
        }
        console.log(bag)
    }
}

squarePattern(5)