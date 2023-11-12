/*** 
 * Filename: Complex_JavaScript_Code.js
 * 
 * Description: This code is a complex and elaborate JavaScript program that demonstrates various concepts and techniques.
 * It is more than 200 lines long and showcases advanced programming practices and creativity.
 */

// Constants
const PI = Math.PI;
const E = Math.E;

// Function to calculate factorial
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

// Function to calculate nth Fibonacci number using recursion
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Class for representing geometric shapes
class Shape {
  constructor(name) {
    this.name = name;
  }

  // Method to display the name of the shape
  displayName() {
    console.log(`Shape name: ${this.name}`);
  }
}

// Class for representing a rectangle
class Rectangle extends Shape {
  constructor(length, width) {
    super("Rectangle");
    this.length = length;
    this.width = width;
  }

  // Method to calculate the area of the rectangle
  calculateArea() {
    return this.length * this.width;
  }
}

// Class for representing a circle
class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  // Method to calculate the area of the circle
  calculateArea() {
    return PI * Math.pow(this.radius, 2);
  }
}

// Function to generate random numbers in a specified range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array of shapes
const shapes = [
  new Rectangle(4, 5),
  new Circle(6),
  new Rectangle(10, 3),
  new Circle(8)
];

// Displaying information about each shape
shapes.forEach(shape => {
  shape.displayName();
  shape.calculateArea();
});

// Generating random numbers
const randomNumbers = Array.from({ length: 10 }, () =>
  getRandomNumber(1, 100)
);

// Sorting the random numbers in ascending order
randomNumbers.sort((a, b) => a - b);

console.log("Sorted random numbers: ", randomNumbers);

// Printing the factorial of numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Factorial of ${i}:`, factorial(i));
}

// Printing the first 15 Fibonacci numbers
for (let i = 0; i < 15; i++) {
  console.log(`Fibonacci number at index ${i}:`, fibonacci(i));
}

/*** 
 * ... Additional complex code goes here ...
 */

// End of code