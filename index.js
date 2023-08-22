// Modules
const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shape.js");

// Questions for user
const questions = [{}];

// Initialize the process
function init() {
  inquirer.prompt(questions).then((answers) => {});
}
