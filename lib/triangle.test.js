const { Triangle } = require("./shape");

// describe block for Triangle
describe("Triangle", () => {
  // Test 1: Attributes should be set correctly
  test("should correctly set attributes", () => {
    // Create an instance of triangle with Triangle Text, bgColor red, and textColor white
    const triangle = new Triangle("Triangle Text", "red", "white");

    // Check if the attributes of the triangle instance are correctly set
    expect(triangle.bgColor).toEqual("red");
    expect(triangle.textColor).toEqual("white");
  });

  // Test 2: SVG rendering should match the expected SVG markup
  test("should render a triangle with correct SVG markup", () => {
    // Create an instance of triangle with specific attributes
    const triangle = new Triangle("Sample Text", "blue", "yellow");

    // Define the expected SVG markup for the given attributes
    const expectedSVG = `
    <svg width="300" height="260" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,30 270,230 30,230" fill="blue" />
      <text x="150" y="205" font-size="80" text-anchor="middle" fill="yellow">Sample Text</text>
    </svg>`;

    // Check if the rendered SVG matches the expected SVG markup
    expect(triangle.render()).toEqual(expectedSVG);
  });
});
