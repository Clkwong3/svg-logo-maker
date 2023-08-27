const { Square } = require("./shape");

// describe block for Square
describe("square Attributes", () => {
  // Test 1: Attributes should be set correctly
  test("should correctly set attributes", () => {
    // Create an instance of square with Square Text, bgColor green, and textColor yellow
    const square = new Square("Square Text", "green", "yellow");

    // Check if the attributes of the square instance are correctly set
    expect(square.text).toEqual("Square Text");
    expect(square.bgColor).toEqual("green");
    expect(square.textColor).toEqual("yellow");
  });

  // Test 2: SVG rendering should match the expected SVG markup
  test("should render a square with correct SVG markup", () => {
    // Create an instance of square with specific attributes
    const square = new Square("Sample Text", "purple", "white");

    // Define the expected SVG markup for the given attributes
    const expectedSVG = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="160" height="160" fill="purple"/>
      <text x="100" y="120" font-size="60" text-anchor="middle" fill="white">Sample Text</text>
    </svg>`;

    // Check if the rendered SVG matches the expected SVG markup
    expect(square.render()).toEqual(expectedSVG);
  });
});
