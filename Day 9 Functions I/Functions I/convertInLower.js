
// Author : Aman Mittal
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

//Question
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]


function convertInLower(char)
{
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let Newchar = "";
  for(let i = 0;  i < uppercase.length; i++)
    {
      if(char == uppercase[i])
      {
        Newchar = lowercase[i]
      }

    }

  return Newchar;
}

function main(arr)
{
  let output = [];
  for(let i = 0; i < arr.length; i++)
    {
      let str = arr[i];
        let bag = "";
      for(let j = 0;  j < str.length; j++)
        {
          let EachChar = convertInLower(str[j])
          bag += EachChar;
        }
      output.push(bag);
    }
  console.log(output)
}

main(["MA", "SA", "I", "SCH", "OOL"])