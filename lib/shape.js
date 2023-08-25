// Base
class Shape {
  // set the color during object creation
  constructor(text, textColor, bgColor) {
    this.text = text;
    this.textColor = textColor;
    this.bgColor = bgColor;
  }
}

// Triangle
class Triangle extends Shape {
  render() {
    // Fixed Values
    return `
    <svg width="300" height="260" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,30 270,230 30,230" fill="${this.bgColor}" />
      <text x="150" y="205" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
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
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="160" height="160" fill="${this.bgColor}"/>
      <text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
