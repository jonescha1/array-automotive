//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle;

class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  loadPassenger(num) {
    if (this.passenger < this.maximumPassengers) {
      if (num + this.passenger <= this.maximumPassengers) {
        this.passenger = num;
        return this.passenger;
      } else {
        console.log(
          `${this.make} ${this.model} does not have enough room to carry ${num} passenger(s)`
        );
      }
    } else {
      console.log(this.model + " " + this.make + " is full");
    }
  }

  start() {
    if (this.fuel > 0) {
      console.log("engine has started.");
      return (this.started = true);
    } else {
      console.log("no fuel");
      return (this.started = false);
    }
  }

  service() {
    if (this.mileage > 30000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }
}

//this shows how to call from this module...
let myTruck = new Car("GMC", "Sierra", "2021", "Silver", 20000);

myTruck.start();
myTruck.loadPassenger(4);
myTruck.service();

console.log(myTruck);
