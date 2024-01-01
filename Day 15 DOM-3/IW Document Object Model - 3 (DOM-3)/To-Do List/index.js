let myForm = document.querySelector('form');
let inpTask  = document.getElementById('task');
let priority = document.getElementById('priority');
let tbody = document.querySelector('tbody')
let AllData = []

myForm.addEventListener('submit',function(e)
{
 e.preventDefault();

 let Data = {};
 Data.input1 = inpTask.value;
 Data.input2 = priority.value; 
 console.log(Data)
AllData.push(Data)
tbody.innerHTML=null
AllData.map((ele)=>
{
    let row = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    td1.innerText = ele.input1
    td2.innerText = ele.input2
    row.append(td1,td2);
    tbody.append(row)
})

})