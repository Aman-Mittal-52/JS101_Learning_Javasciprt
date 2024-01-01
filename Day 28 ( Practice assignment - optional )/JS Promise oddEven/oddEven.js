


           // Author ~ Aman Mittal
           // LinkedIn ~ https://www.linkedin.com/in/aman-mittal-22833b288/

function getData(data) {
    let myPromise = new Promise((resolve,reject)=>{
        if(typeof data === "number"){
            if(data%2==0){
                setTimeout(()=>{
                    resolve("even")
                },4000)
            }
            else{
                setTimeout(()=>{
                    resolve("odd")
                },2000)
            }
        }
        else{
            reject("error")
        }
    })
    return myPromise;
}

export default getData
