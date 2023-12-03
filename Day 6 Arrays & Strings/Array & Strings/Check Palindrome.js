
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/


function checkPalindrome(N, str) {
    //write code here
    let arr1='';
    let arr2='';
    
    for(let i=0; i<N; i++)
    {
        arr1+=st[i];
    }
    
    for(let i=N-1; i>=0; i--)
    {
        arr2+=str[i];
    }
    
    if(arr1===arr2)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }
}

checkPalindrome(4,"aman") //--> No
checkPalindrome(5,"kanak") //--> Yes