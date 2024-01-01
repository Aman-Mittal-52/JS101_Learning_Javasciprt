


           // Author ~ Aman Mittal
           // LinkedIn ~ https://www.linkedin.com/in/aman-mittal-22833b288/


function UserInfo(name, location) {
    this.name = name;
    this.location = location;
}

function serveFood(food) { return `Serving ${food} to ${this.name} in ${this.location}`; }

function serveIn(name, location, food) {
    const user = new UserInfo(name, location);
    return serveFood.call(user, food);
}
function billNote(total) { return `${this.name}'s bill is INR ${total}`; }

function generateInVoice(name, location, quantity, price) {
    const user = new UserInfo(name, location);
    const total = quantity * price;
    return billNote.apply(user, [total]);
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
