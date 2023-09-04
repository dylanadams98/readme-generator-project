// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application?',
    },
    {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your application',
    },
    {
        type: 'input',
        name: 'dependent',
        message: 'Please list all packages required to run your application',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your application have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command is used to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command is used to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using this repo?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to this repo?',
    },
];

// TODO: Create a function to write README file
function writeToFile(markdown) {
    return fs.writeFile('readme.md', markdown, (err) =>
        err ? console.log(err) : console.log('Successfully created!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile(markdown);
        });
}

// Function call to initialize app
init();