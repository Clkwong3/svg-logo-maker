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
  inquirer.prompt(questions).then((answers) => {});
}
