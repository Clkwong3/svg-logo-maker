const { Square } = require("../lib/shape");

// describe block for square
describe("square Attributes", () => {
  // Test 1
  test("renders a square with CORRECT attributes", () => {
    // Create an instance of square with color yellow
    const square = new square("yellow");

    // Define the expected SVG markup for a yellow square
    const correctAttributes = `<rect x="50" y="50" width="200" height="200"  fill="yellow"/>`;

    // Check if the rendered SVG matches the expected SVG
    expect(square.render()).toBe(correctAttributes);
  });
});
