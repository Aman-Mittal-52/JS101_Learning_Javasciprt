
// Wrote by Aman mittal

function masaiDivisors(left, right, k) {
    //write code here
    for(count = 0; left<=right; left++)
    {
        if(left%k===0)
        {
            count++
        }
    }
    console.log(count)
}

masaiDivisors(1,20,3)