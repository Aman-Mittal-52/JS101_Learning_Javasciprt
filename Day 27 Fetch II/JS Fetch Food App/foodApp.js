


           // Author ~ Aman Mittal
           // LinkedIn ~ https://www.linkedin.com/in/aman-mittal-22833b288/


const getCategoriesData = async () => {
    // code here
    try {
      let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      let data = await response.json()
      console.log('category Data: ⤵️');
      return data;
    }
    catch (err) {
      return"something went wrong";
    }
  };
  
  const getIngredientData = async () => {
    try {
      let response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
      let data = await response.json();
      console.log(`Ingredient Data: ⤵️`);
      return data;
    } catch (err) {
      return "something went wrong";
    }
    // code here
  };
  
  window.onload = function () {
    //  get the buttons here and add click event
    let categoryBtn = document.getElementById("get-category-data")
    let ingredientBtn = document.getElementById("get-ingredient-data")
  
    categoryBtn.addEventListener("click", getCategoriesData)
    ingredientBtn.addEventListener("click", getIngredientData)
  };
  
  // donot chnage the export statement
  
  if (typeof exports !== "undefined") {
    module.exports = {
      getCategoriesData,
      getIngredientData,
    };
  }
  
  
  jest.setTimeout(10000);
  