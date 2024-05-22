// U22978120

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

// Implementing a brake method that decreases the car's speed by 5 km/h
brake() {
  this.speed -=5;
  console.log(`${this.make} speed decreased to ${this.speed} km/h`);
}
}

// Test Data
  const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

//Test accelerating and braking on BMW
console.log("Testing BMW:");
bmw.accelerate(); // 130 km/h
bmw.accelerate(); // 140 km/h
bmw.accelerate(); // 150 km/h
bmw.brake(); // 145 km/h
bmw.brake(); // 140 km/h

// Test accelerating and braking on Mercedes
console.log("Testing Mercedes:");
mercedes.accelerate(); // 105 km/h
mercedes.accelerate(); // 115 km/h
mercedes.accelerate(); // 125 km/h
mercedes.brake(); // 120 km/h
mercedes.brake(); // 115 km/h
