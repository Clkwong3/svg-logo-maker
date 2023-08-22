const { Square } = require("../lib/shape");

// describe block for Square
describe("square Attributes", () => {
  // Test 1
  test("renders a square with CORRECT attributes", () => {
    // Create an instance of square with color yellow
    const square = new Square("yellow");

    // Define the expected SVG markup for a yellow square
    const correctAttributes =
      '<rect x="50" y="50" width="100" height="100" fill="yellow"/>';

    // Check if the rendered SVG matches the expected SVG
    expect(square.render()).toBe(correctAttributes);
  });
});
