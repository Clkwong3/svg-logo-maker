const { Circle } = require("../lib/shape");

// describe block for Circle
describe("Circle Attributes", () => {
  // Test 1
  test("renders a circle with CORRECT attributes", () => {
    // Create an instance of Circle with color green
    const circle = new Circle("green");

    // Define the expected SVG markup for a green circle
    const correctAttributes =
      '<circle cx="50" cy="50" r="100" width="100" height="100" fill="green"/>';

    // Check if the rendered SVG matches the expected SVG
    expect(circle.render()).toBe(correctAttributes);
  });
});
