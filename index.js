// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provided a short description to explain the what, why and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps reuired to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application? Provide instructions and examples for use.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'List all license here.',
        choices: ['MIT', 'Apache 2.0', 'GNU General Public License', 'BSD 3-Clause License', 'ISC License'],
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
  ];
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('README.md successfully generated!');
    });
  }
  

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
      })
      .catch((error) => {
        console.error('Error occurred while prompting questions:', error);
      });
  }

// Function call to initialize app
init();
