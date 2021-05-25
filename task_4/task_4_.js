function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function() {
  console.log("Chu vi "+ this.name + " là " + this.sides * this.sideLength);
}

let square = new Shape('hình vuông', 4, 5);

square.calcPerimeter();

let triangle = new Shape('hình tam giác', 3, 3);

triangle.calcPerimeter();

// https://codelearn.io/sharing/prototype-trong-javascript