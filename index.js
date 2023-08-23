// Modules
const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shape.js");

// Questions for user
const questions = [
  {
    type: "list",
    name: "shape",
    choices: ["Circle", "Square", "Triangle"],
    message: "Please select a shape:",
  },
  {
    name: "text",
    message: "Please enter text (maximum 3 characters):",
    validate: (input) => {
      return input.length <= 3 ? true : "Please enter up to 3 characters.";
    },
  },
  {
    name: "bgColor",
    message: "Please enter the background color:",
  },
  {
    name: "textColor",
    message: "Please enter the text color:",
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
          answers.bgColor,
          answers.textColor
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
