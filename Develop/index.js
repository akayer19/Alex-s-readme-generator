// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Use fs.writeFileSync to write data to a file with the given fileName
    fs.writeFileSync(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md has been generated successfully!');
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        // Generate the README content based on 'answers'
        const readmeContent = generateREADME(answers);
  
        // Write the README file
        writeToFile('README.md', readmeContent); // Pass readmeContent as the second argument
      })
      .catch((error) => {
        console.error(error);
      });
  }

// Function to generate README content based on user answers
// Function to generate README content based on user answers
function generateREADME(answers) {
    return `
# ${answers.title}

## Description
- Add a description of your project here.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- Provide installation instructions here.

## Usage
- Provide usage information here.

## License
- Add a badge for your license here (e.g., MIT, Apache, etc.).
- Include details about your chosen license.

## Contributing
- Provide contribution guidelines here.

## Tests
- Explain how to run tests for your application here.

## Questions
- If you have any questions, you can reach me on GitHub: [GitHub Profile](https://github.com/${answers.githubUsername})
- For additional questions, contact me via email: ${answers.email}
    `;
}

// Function call to initialize app
init();
