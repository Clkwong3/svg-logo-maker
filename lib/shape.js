// Base
class Shape {
  // set the color during object creation
  constructor(color) {
    this.color = color;
  }
}

// Triangle
class Triangle extends Shape {
  render() {
    // Fixed Values
    return `<polygon points="50,15 100,100 0,100" fill="${this.color}" />`;
  }
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
  render() {
    // Fixed Values
    return `<rect x="50" y="50" width="100" height="100" fill="${this.color}"/>`;
  }
}

module.exports = { Triangle, Circle, Square };
