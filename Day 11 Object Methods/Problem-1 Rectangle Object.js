

// Code Author - Aman Mittal 
// Linkdin --> https://www.linkedin.com/in/aman-mittal-22833b288/



let details = {
    arr: [],
    add: function (name, phy, math, eng) {
        let obj = {};
        obj.name = name;
        obj.phy = phy;
        obj.math = math;
        obj.eng = eng;
        this.arr.push(obj);
    },
    lowest: function () {
        let min = Infinity;
        let low_student;
        for (let i = 0; i <= this.arr.length - 1; i++) {
            let total = this.arr[i].phy + this.arr[i].math + this.arr[i].eng;
            if (total < min) {
                min = total;
                low_student = this.arr[i].name;
            }
        }
        return low_student;
    }
}


details.add("Aman",23,45,67);
details.add("pinku",65,5,22);

console.log(details.arr);

console.log(details.lowest());