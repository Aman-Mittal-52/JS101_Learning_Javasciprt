
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/


function charAtOddPos(N,str) {
    //write code here
    for(i=0; i < N; i++)
    {
        if(i % 2===1 )
        {
            console.log(str[i]);
        }
    }
    
}

charAtOddPos(10,"Aman mittal") //-->mnmta in horizontal line