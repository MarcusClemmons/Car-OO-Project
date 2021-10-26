//part 1


class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }

    toString(){
        return `This vehicle is a ${this.make},${this.model},${this.year}`;
    }
}    

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);


//part 2

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
      }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);

//part 3
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
  
    revEngine() {
      return 'VROOM!!!';
    }

   
}    

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);


//part 4
// Had to look at the solution
class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }

let garage = new Garage(2);