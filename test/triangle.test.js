const { Triangle } = require("../lib/shape");

// describe block for Triangle
describe("Triangle", () => {
  // Test 1
  test("renders a triangle with CORRECT attributes", () => {
    // Create an instance of triangle with base 250, height 150, and color pink
    const triangle = new Triangle(200, 150, "pink");

    // Define the expected SVG markup for a pink triangle
    const correctAttributes =
      '<polygon points="50,15 100,100 0,100" fill="pink" />';

    // Check if the rendered SVG matches the expected SVG
    expect(triangle.render()).toBe(correctAttributes);
  });
});
