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
  render() {
    // Fixed Values
    return `<circle cx="50" cy="50" r="100" width="100" height="100" fill="${this.color}"/>`;
  }
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
