// Function to generate license badge based on the selected license
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)';
  } else if (license === 'Apache') {
    return '![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } 
  return ''; // Return an empty string if no license is selected
}

// Function to generate the license link based on the selected license
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[Apache License](https://www.apache.org/licenses/LICENSE-2.0)';
  } 
  return ''; // Return an empty string if no license is selected
}

// Function to generate the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `
## License
${renderLicenseBadge(license)}

This project is licensed under the ${license} License. 
See the [License](LICENSE) file for details.
`;
  }
  return ''; // Return an empty string if no license is selected
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { // data is the user input from the inquirer prompts
  const licenseBadge = renderLicenseBadge(data.license); // Generate the license badge

  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)} 
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)} 

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
- If you have any questions, you can reach me on GitHub: <a href="https://github.com/${data.githubUsername}" target="_blank">GitHub Profile</a>
- For additional questions, contact me via email: ${data.email}
    `;
}

module.exports = generateMarkdown; // Export the generateMarkdown function
