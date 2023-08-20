const { test } = require("node:test");
const { Shape, Circle, Triangle, Square } = require("../lib/shape");

// describe block for "Shape Classes"
describe("Shape Classes", () => {
  // describe block for "Shape"
  describe("Shape", () => {
    // Passing Test
    test("should set up color correctly", () => {
      // Create an instance of Shape with color red
      const shape = new Shape("red");

      // Check if Shape instance is red
      expect(shape.color).toEqual("red");
    });
  });
});
