
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/


function vowelAndConsonantCount(N, str) {
    //write code here
    let count=0;
    
    for(i=0; i<N; i++){
        if(str[i]==='a'){
            count++;
        }
        else if(str[i]==='e'){
            count++;
        }
        else if(str[i]==='i'){
            count++;
        }
        else if(str[i]==='o'){
            count++;
        }
        else if(str[i]==='u'){
            count++;
        }
       
    }
    console.log(count+" "+(N-count));
  }

  vowelAndConsonantCount(5,"Aman") //--> 2
  vowelAndConsonantCount(5,"aeiou") //--> 5