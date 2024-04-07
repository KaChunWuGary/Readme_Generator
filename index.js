// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title?",
    "Describe this application",
    "What are the installation instructions?",
    "How do you use this application?",
    "What are the contribution guidelines",
    "What are the test instructions?",
    "What license are you using?",
    "What is your username?",
    "What is your email?", 
];
// TODO: Create a function to write README file
async function writeToFile(fileName) {
    const answers = await inquirer.prompt([
        { 
            type: 'input', 
            name: 'title', 
            message: `${questions[0]}` 
        },
        { 
            type: 'input', 
            name: 'describe', 
            message: `${questions[1]}`
        },
        { 
            type: 'input', 
            name: 'installation', 
            message: `${questions[2]}` 
        },
        { 
            type: 'input', 
            name: 'usage', 
            message: `${questions[3]}` 
        },
        { 
            type: 'input', 
            name: 'contribution', 
            message: `${questions[4]}` 
        },
        { 
            type: 'input', 
            name: 'testing', 
            message: `${questions[5]}` 
        },
        { 
            type: 'list', 
            name: 'license',
            message: `${questions[6]}`,
            choices: ['none','MIT', 'Open Database License', 'Mozilla Public License 2.0', 'GNU Affero General Public License 3.0'] 
        },
        { 
            type: 'input', 
            name: 'username', 
            message: `${questions[7]}` 
        },
        { 
            type: 'input', 
            name: 'email', 
            message: `${questions[8]}` 
        }
    ]);
    const data = generateMarkdown.generateMarkdown(answers);

    try {
        await fs.writeFile(fileName, data, 'utf8');
        console.log(`Successfully created ${fileName}!`);
    } catch (err) {
        console.error(err);
    }
}


// TODO: Create a function to initialize app
function init() {
    writeToFile("readme.md");
}

  
// Function call to initialize app
init();
