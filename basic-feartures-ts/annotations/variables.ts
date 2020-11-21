//primitive
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let undetify: undefined = undefined;

//object
let now: Date = new Date();

//array
let color: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let what: boolean[] = [true, false];

//classes
// class Car {}

let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function
const myFunc: (param: number) => number = (i: number) => {
  return i;
};

//any
let object = '{"x":10,"y":20}';
// coordinates is any, it can be string, number, null,...
const coordinates = JSON.parse(object);
// coordinates.param => accept

// define the annotation for this variable:
const coordinates_1: { x: number; y: number } = JSON.parse(object);
// coordinates_1.param => error

//annotation to set variable can be have another type
let types: number | string = 'hi';
types = 24;
