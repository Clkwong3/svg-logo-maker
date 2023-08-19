// Base
class Shape {
  constructor(color) {
    this.color = color;
  }
}

// Triangle
class Triangle extends Shape {
  constructor() {}
  render() {}
}

// Circle
class Circle extends Shape {
  constructor() {}
  render() {}
}

// Square
class Square extends Shape {
  constructor() {}
  render() {}
}

module.exports = { Triangle, Circle, Square };
