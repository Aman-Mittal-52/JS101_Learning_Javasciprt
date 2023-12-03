
// Author : Aman mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/ 

function mapCharAgain(N) {
    // Write code here
    let str= "abcdefghijklmnopqrstuvwxyz"
    let obj={}
    
    for(let i=0; i<str.length; i++){
            obj[str[i]]=N;
            N++
            
        }
    // console.log(obj)
    for(let key in obj){
        console.log(key+'-'+obj[key])
    }
    
}

mapCharAgain(30)