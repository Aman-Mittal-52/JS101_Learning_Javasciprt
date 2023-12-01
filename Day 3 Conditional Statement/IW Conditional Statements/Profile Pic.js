//Made by Aman mittal

function profilePic(L, W, length, width) {
    //Write code here
    if(length>L){
       if(width > W){
         console.log("Upload")
       }
       else{
           console.log("Increase Width")
       }
    }
    else{
        console.log("Increase Length")
    }
  }
  profilePic(10,40,15,30)