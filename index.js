// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
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
      // Generate the README content based on 'answers' using the imported function
      const readmeContent = generateMarkdown(answers);

      // Write the README file
      writeToFile('README.md', readmeContent); // Pass readmeContent as the second argument
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function to generate README content based on user answers
// Function to generate README content based on user answers
// Function to generate markdown for README
// Function to generate markdown for README
function generateMarkdown(data) {
  // Call renderLicenseLink to get the license link
  const licenseLink = renderLicenseLink(data.license);

  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license) // Place License section here
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseLink} // Insert the license link here

${renderLicenseSection(data.license)} // Include the license section here

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
- If you have any questions, you can reach me on GitHub: [GitHub Profile](https://github.com/${data.githubUsername})
- For additional questions, contact me via email: ${data.email}
    `;
}

module.exports = generateMarkdown;



// Function call to initialize app
init();
