

           // Author ~ Aman Mittal
           // LinkedIn ~ https://www.linkedin.com/in/aman-mittal-22833b288/


// Function constructor
function FourWheeler(model, color, speed, fuel) {
    this.wheels = 4;
    this.model = model;
    this.color = color;
    this.speed = speed;
    this.fuel = fuel;
  }
  
  FourWheeler.prototype.setSpeed = function(newSpeed) {
    this.speed = newSpeed;
  };
  
  FourWheeler.prototype.updateColor = function(newColor) {
    this.color = newColor;
  };
  
  FourWheeler.prototype.updateFuel = function(newFuel) {
    this.fuel = newFuel;
  };
  
  // Parent object for Object.create
  let FourWheelerObject = {
    wheels: 4,
    setSpeed: function(newSpeed) {
      this.speed = newSpeed;
    },
    updateColor: function(newColor) {
      this.color = newColor;
    },
    updateFuel: function(newFuel) {
      this.fuel = newFuel;
    }
  };
  
  // Store function constructor object here
  var car1 = new FourWheeler("Sedan", "Blue", 120, "Petrol");
  
  // Store Object.create here
  var car2 = Object.create(FourWheelerObject);
  car2.model = "SUV";
  car2.color = "Red";
  car2.speed = 100;
  car2.fuel = "Diesel";
  
  export { car1, car2 };
  