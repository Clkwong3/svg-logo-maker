const { Circle } = require("../lib/shape");

// describe block for Circle
describe("Circle Attributes", () => {
  // Test 1: Attributes should be set correctly
  test("should correctly set attributes", () => {
    // Create an instance of circle with Circle Text, bgColor blue, and textColor black
    const circle = new Circle("Circle Text", "blue", "black");

    // Check if the attributes of the circle instance are correctly set
    expect(circle.text).toEqual("Circle Text");
    expect(circle.bgColor).toEqual("blue");
    expect(circle.textColor).toEqual("black");
  });

  // Test 2: SVG rendering should match the expected SVG markup
  test("should render a circle with correct SVG markup", () => {
    // Create an instance of circle with specific attributes
    const circle = new Circle("Sample Text", "green", "purple");

    // Define the expected SVG markup for the given attributes
    const expectedSVG = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="green"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">Sample Text</text>
    </svg>`;

    // Check if the rendered SVG matches the expected SVG markup
    expect(circle.render()).toEqual(expectedSVG);
  });
});
