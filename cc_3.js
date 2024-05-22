U22978120

//Creating the car class with constructor
class Car {
  constructor(make,speed) {
    this.make = make;
    this.speed = speed;
  }

// Implementing an acceleration method that increases the car speed by 10 km/h
accelerate() {
  this.speed += 10;
  console.log(`${this.make} speed increased to ${this.speed} km/h`);
}
  
