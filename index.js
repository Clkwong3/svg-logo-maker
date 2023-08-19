// Modules
const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shape.js");

// Questions for user
const questions = [{}];

class svg {
  constructor() {}
  render() {}
}

// Write README content to a file
function writeToFile(fileName, data) {
  fs.writeFile();
}

// Initialize the process
function init() {
  inquirer.prompt(questions).then().catch();
}
