let message: string = 'HEllo';
console.log(message);

let age: number = 24;

let isLoggedIn: boolean = false;

let emptyValue: null = null;
console.log('emptyValue', emptyValue);

let notAssigned: undefined = undefined;
console.log('Not assigned: ', notAssigned);

let uniqueId1: symbol = Symbol('id');
let uniqueId2: symbol = Symbol('id');
console.log('Are symbols equal', uniqueId1 === uniqueId2);

// let bingNumber: bigint = 12291212912031n
// console.log('largeInt', largeInt);

//*************** Union Types **********/

function printStatus(status: 'success | error | loading') {
  console.log('Mixed array: ', status);
}

let mixedArray: (number | string)[] = ['abc', 1];
console.log('mixedArray', mixedArray);

//*************** Optional and read only **********/

type Book = {
  readonly id: number;
  title: string;
  pages?: number;
};

let myBook: Book = { id: 1, title: 'TypeScript Basics' };
console.log('Book', myBook);

// myBook.id = 2

//*************** Functions in TS **********/

// Function type annotation
let operation: (x: number, y: number) => number;

// Assiging 'add function
function add(a: number, b: number = 2): number {
  return a + b;
}

operation = add;
console.log('Operation (add)', operation(2, 3));

// Asssiging inline arrow function
operation = (x, y) => x - y;
console.log('operation subtract', operation(22, 5));

//*************** Classes, Access Modifiers and Objects in TS **********/

// class Vehicle {
//   public brand: string; // accessible everywhere
//   private engineNo: string; // stays within class
//   protected wheels: string; // can be used within class + child classes
// }

// class MathUtil {
//   static PI = 3.14;
//   static areaOfCircle(r: number) {
//     return this.PI * r * r;
//   }
// }

//*************** Classes, Access Modifiers(public, private and protected) and Objects in TS **********/

class Student {
  static schoolName: string = 'DAV Public School';
  name: string;
  rollNo: string;

  constructor(name: string, rollNo: string) {
    this.name = name;
    this.rollNo = rollNo;
  }

  static changeSchool(newName: string): void {
    this.schoolName = newName;
  }
}

console.log('Current School Name": ', Student.schoolName);
Student.changeSchool('DPS');
console.log('New School name: ', Student.schoolName);

// Public fields and methods are full accessible everywhere

class Vehicles {
  public brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  public start(): void {
    console.log(`${this.brand} is starting`);
  }
}

const vehicle1 = new Vehicles('Maruti');
console.log(vehicle1.brand); // allowed
console.log(vehicle1.start()); // allowed

//*************** Inheritance in TS **********/

// class Vehicle {
//   brand: string;

//   constructor(brand: string) {
//     this.brand = brand;
//   }

//   start(): void {
//     console.log(`${this.brand} is starting`);
//   }
// }

// const v1 = new Vehicle('Generic');
// v1.start();

// class Car extends Vehicle {
//   model: string;

//   constructor(brand: string, model: string) {
//     super(brand); // call parent constructor
//     this.model = model; //initialize child property
//   }

//   displayCarDetails(): void {
//     console.log(`${this.brand} ${this.model} is an awesome vehicle`);
//   }

//   override start(): void {
//     //overrides parent class method
//     super.start(); // call parent method
//     console.log(`${this.brand} ${this.model} is ready to go`);
//   }
// }

// const car1 = new Car('Toyota', 'Etios');
// car1.start();
// car1.displayCarDetails();

// const car2 = new Car('Tesla', 'Model Y');
// car2.start();

// // Multilevel Inheritance
// class ElectricCar extends Car {
//   batteryLevel: number;

//   constructor(brand: string, model: string, batteryLevel: number) {
//     super(brand, model);
//     this.batteryLevel = batteryLevel;
//   }

//   override start(): void {
//     super.start(); // runs Car.start -> which already called Vehicle.start
//     console.log(`Battery at ${this.batteryLevel}%. Ready to drive silently!`);
//   }
// }

// const car3 = new ElectricCar('Tesla', 'Model 3', 82);
// car3.start();

//*************** Abstract Classes and Interface in TS **********/

// Abstract Base Class
// abstract class Vehicle {
//   constructor(protected brand: string) {}

//   showBrand(): void {
//     console.log(`Brand: ${this.brand}`);
//   }

//   abstract start(): void; // must be defined by subclasses. Every subclass can define start in its own way
// }

// // Car subclass uses the Abstract class
// class Car extends Vehicle {
//   constructor(
//     brand: string,
//     public model: string,
//   ) {
//     super(brand);
//   }

//   override start(): void {
//     console.log(`${this.brand} ${this.model} is starting..`);
//   }
// }

// const car = new Car('Toyota', 'Corolla');
// car.showBrand();

// // Bike subclass with its own behaviour
// class Bike extends Vehicle {
//   constructor(
//     brand: string,
//     public cc: number,
//   ) {
//     super(brand);
//   }

//   override start(): void {
//     console.log(`${this.brand} bike with ${this.cc}cc is starting...`);
//   }
// }

// const bike = new Bike('Yamaha', 150);
// bike.showBrand();
// bike.start();

// //Polymorphism Helper (one function can run methods of both the objects) ie one function can run with many different subclasses
// function runStartup(v: Vehicle): void {
//   v.showBrand();
//   v.start();
// }

// runStartup(car);
// runStartup(bike);

// Polymorphism - one function can work with many different subclasses. When we call run Startup with Car and Bike, typescript guarantees
// that both objects will follow the rule of Vehicle. At runtime, each object can run its own instance of start method.

//*************** Interface in TS **********/

// interface lets us define a rule once and implement it in many ways. It only provides contract and classes can implement it in their own way

interface Drivable {
  start(): void;
  stop(): void;
}

class Car implements Drivable {
  constructor(
    public brand: string,
    public model: string,
  ) {}
  start(): void {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
  stop(): void {
    console.log(`${this.brand} ${this.model} has stopped...`);
  }
}

class Bike implements Drivable {
  constructor(
    public brand: string,
    public cc: number,
  ) {}
  start(): void {
    console.log(`${this.brand} bike with ${this.cc}cc is starting...`);
  }
  stop(): void {
    console.log(`${this.brand} bike with ${this.cc}cc has stopped...`);
  }
}

const car = new Car('Toyota', 'Corolla');
// car.start();
// car.stop();

const bike = new Bike('Yamaha', 250);
// bike.start();
// bike.stop();

function testRun(v: Drivable): void {
  v.start();
  v.stop();
}

testRun(car);
testRun(bike);

//*************** Differenec between Abstract and Interface in TS **********/

abstract class Animal {
  constructor(protected name: string) {}

  eat(): void {
    console.log(`${this.name} is eating!`);
  }

  abstract makeSound(): void;
}

class Dog extends Animal {
  override makeSound(): void {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog('Buddy');
dog.eat();
dog.makeSound();

// Abstract classes let you share c

interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable, Swimmable {
  fly(): void {
    console.log('Bird is flying');
  }

  swim(): void {
    console.log('Bird is swimming!');
  }
}

// Interface dont share any code. They share structure. A Class can implement multiple interfaces at same time.
// Interface dont share any logic. They are pure rules and are best when need only structure and want to allow maximum flexibility.
