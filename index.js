// Modules
const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shape.js");

// Questions for User
const questions = [
  {
    name: "text",
    message: "Please enter text (maximum 3 characters):",
    validate: (input) => {
      return input.length <= 3 ? true : "Please enter up to 3 characters.";
    },
  },
  {
    name: "textColor",
    message: "Please enter the text color:",
  },
  {
    type: "list",
    name: "shape",
    choices: ["Circle", "Square", "Triangle"],
    message: "Please select a shape:",
  },
  {
    name: "bgColor",
    message: "Please enter the background color:",
  },
];

// Initialize the process
function init() {
  inquirer.prompt(questions).then((answers) => {
    let chosenShape;

    switch (answers.shape) {
      case "Circle":
        chosenShape = new Circle(
          answers.text,
          answers.textColor,
          answers.bgColor
        );
        break;
      case "Triangle":
        chosenShape = new Triangle(
          answers.text,
          answers.textColor,
          answers.bgColor
        );
        break;
      case "Square":
        chosenShape = new Square(
          answers.text,
          answers.textColor,
          answers.bgColor
        );
        break;
      default:
        break;
    }

    fs.writeFile("./dist/logo.svg", chosenShape.render(), (err) => {
      if (err) {
        console.error("Error creating SVG:", err);
      } else {
        console.log("SVG has been created");
      }
    });
  });
}

init();
