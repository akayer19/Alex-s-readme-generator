// TODO: Include packages needed for this application
const fs = require('fs'); // File System module
const inquirer = require('inquirer'); // Inquirer module
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require('./utils/generateMarkdown');  // Import the functions from generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');   // Import the entire generateMarkdown.js file

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
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can someone install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How can someone use your project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can someone test your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'Other'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address for contact?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Use fs.writeFileSync to write data to a file with the given fileName
  fs.writeFileSync(fileName, data);
  console.log('Entries have been captured and written to the README.md!');
}

// TODO: Create a function to initialize app
function init() {
  inquirer // Use inquirer to prompt the user with the questions array
    .prompt(questions)  // Pass the questions array as the argument
    .then((answers) => {  // Use the answers to generate the README content
      // Generate the README content based on 'answers' using the imported function
      const readmeContent = generateMarkdown(answers);

      // Write the README file
      writeToFile('README.md', readmeContent); // Pass readmeContent as the second argument
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
