class Vehicle {
  drive(): void {
    console.log('hehe');
  }
}

const vehicle = new Vehicle();
vehicle.drive();

class Car {
  constructor(public param: string) {} // param is a field of this class
}

const car = new Car('');
// car.drive();
