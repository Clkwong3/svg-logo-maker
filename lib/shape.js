// Base
class Shape {
  // set the color during object creation
  constructor(text, bgColor, textColor) {
    this.text = text;
    this.bgColor = bgColor;
    this.textColor = textColor;
  }
}

// Triangle
class Triangle extends Shape {
  render() {
    // Fixed Values
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,15 100,100 0,100" fill="${this.bgColor}">
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

// Circle
class Circle extends Shape {
  render() {
    // Fixed Values
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.bgColor}"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

// Square
class Square extends Shape {
  render() {
    // Fixed Values
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="150" y="150" width="200" height="200" fill="${this.bgColor}"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
