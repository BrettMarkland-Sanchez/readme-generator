// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What should this project be called?',
        name: 'Project Title',
    },
    {
        type: 'input',
        message: 'Please provide a description for the project:',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Specify installation instructions:',
        name: 'Installation',
    },
    {
        type: 'input',
        message: `What is the project's purpose/usage?`,
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'How best can others contribute to the project?',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'Specify testing instructions:',
        name: 'Tests',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, 'utf8', (error, response) =>
    error ? console.error(error) : console.log(JSON.stringify(response)))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile(`README.md`, response);
    });
}

// Function call to initialize app
init();