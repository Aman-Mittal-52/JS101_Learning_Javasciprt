


           // Author ~ Aman Mittal
           // LinkedIn ~ https://www.linkedin.com/in/aman-mittal-22833b288/



const getUsersData = async () => {
    try {
      let result = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users")
      let data = await result.json();
      return data;
    } catch (err) {
      return err
    }
  
  };
  
  function splitData(data,totalPages) {
    let [data1,data2,...data3] = data;
    return {
      totalPages,
      data1,
      data2,
      data3
    }
  }
  
  
  // donot change the export statement
  
  if (typeof exports !== "undefined") {
    module.exports = {
      getUsersData,
      splitData,
    };
  }
  