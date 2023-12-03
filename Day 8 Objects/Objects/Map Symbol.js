
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

function mapSymbols(N) {
    // Write code here
    let obj ={};
    let arr = ['!', '@', '#','$','%','^','&', '*']
    for(i=0; i<8; i++){
        obj[arr[i]] = N;
        N+=2
    }
    for (j in obj){
        console.log(j + '-'+ obj[j])
    }
}

mapSymbols(20) // 20 is the Value to be start