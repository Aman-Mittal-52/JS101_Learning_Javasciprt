import fetch from "isomorphic-fetch";

// 1.
// the following function getProducts() should return a promise that
// resolves to product items
// request url: https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products
// hint1: whatever you return from an async function is a promise that resolves to the value that you return
// hint2: the actual array that we need may be nested within response json. for example {data: [...]}
async function getProducts() {
  // 1. your code here.
  try {
    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products");
    let data = await res.json()
    return data.data
  } catch (error) {
    return error
  }
}

// getProducts().then((data) => console.log(JSON.stringify(data, null, 2)));

// 2.
// the function getProductsSortedByPrice should return a promise that
// resolves to all products sorted by price in ascending order (low to high)
// use the getProducts() function here to fetch all products

async function getProductsSortedByPrice() {
  // 2. your code here.
  let arr = await getProducts();
  let newArr = arr.sort((a, b) => { return a.price - b.price });
  return newArr;
}

// getProductsSortedByPrice().then((data) =>
//   console.log(JSON.stringify(data, null, 2))
// );

// 3.
// the getWellFormattedData() should return a promise that
// resolves to an object with `brand` as keys and an `array of product ids` as value.
// for example, if product 6,7,8,9 & 10 band is Apple, the property Apple would look like
// Apple: [6,7,8,9,10],
// Example result:
/*
  {
    Zebronics: [1,2,3,4,5],
    Apple: [6,7,8,9,10],
    HP: [11,12,13,14,15],
    Dell: [16]
  }
*/
// use the getProducts() function here to fetch all products
// hint: we are changing the shape/structure of the original array
// hint: we are reducing an array down to an object.

async function getWellFormattedData() {
  // 3. your code here.
  let data = await getProducts();
  let arr = data;
  let obj = {
    Zebronics: [],
    Apple: [],
    HP: [],
    Dell: []
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].brand == "Zebronics") {
      obj.Zebronics.push(arr[i].id)
    }
    else if (arr[i].brand == "Apple") {
      obj.Apple.push(arr[i].id)
    }

    else if (arr[i].brand == "HP") {
      obj.HP.push(arr[i].id)
    }

    else if (arr[i].brand == "Dell") {
      obj.Dell.push(arr[i].id)

    }

  }
  return obj
}

// getWellFormattedData().then((data) => console.log(JSON.stringify(data)));

export { getProducts, getProductsSortedByPrice, getWellFormattedData };