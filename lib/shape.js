// Base
class Shape {
  constructor(color) {
    this.color = color;
  }
}

// Triangle
class Triangle extends Shape {
  constructor(sideLength, color) {
    super(color);
    this.sideLength = sideLength;
  }
  render() {}
}

// Circle
class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
  render() {}
}

// Square
class Square extends Shape {
  constructor(sideLength, color) {
    super(color);
    this.sideLength = sideLength;
  }
  render() {}
}

module.exports = { Triangle, Circle, Square };
