function cartTotal(N, price, quantity) {
    let total = 0;
  for(i=0;i<N;i++){
     
      let sum = price[i]*quantity[i] 
      total+= sum;
  }
 console.log(total)
}

// NO. of items
let n = 4;
// [item1, item2, item3 , item1] price
let itemPrice = [100,50,40,80]
// [item1, item2, item3 , item1] quantity
let itemQuantity = [1,5,6,2]

cartTotal(n, itemPrice,itemQuantity)
// Output ~ 690