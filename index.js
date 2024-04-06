// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title?",
    "Describe this application",
    "What are the installation instructions?",
    "What are the contribution guidelines",
    "What are the test instructions?",
    "What license are you using?",
    "What is your username?",
    "What is your email?", 
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: `${questions[0]}`,
            },
            {
                type: 'input',
                name: 'describe',
                message: `${questions[1]}`,
            },           
            {
                type: 'input',
                name: 'installation',
                message: `${questions[2]}`,
            },
            {
                type: 'input',
                name: 'contribution',
                message: `${questions[3]}`,
            },
            {
                type: 'input',
                name: 'testing',
                message: `${questions[4]}`,
            },
            {
                type: 'list',
                name: 'license',
                message: `${questions[5]}`,
                choices: ['MIT', 'Microsoft Public License', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'GNU General Public License v3.0'], 
            },
            {
                type: 'input',
                name: 'username',
                message: `${questions[6]}`,
            },
            {
                type: 'input',
                name: 'email',
                message: `${questions[7]}`,
            },
        ]);
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
