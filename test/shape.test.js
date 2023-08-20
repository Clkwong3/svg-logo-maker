const { Shape } = require("../lib/shape");

// describe block for "Shape Classes"
describe("Shape Classes", () => {
  // describe block for "Shape"
  describe("Shape", () => {
    // Passing Test
    test("should set up color correctly", () => {
      // set the color
      const color = "red";

      // Create an instance of Shape with color
      const shape = new Shape(color);

      // Check if Shape instance is color
      expect(shape.color).toBe(color);
    });
  });
});
