// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function removeSpaceFromLicense(license) {
  // Remove spaces from the license using the replace() method
  var cleanedLicense = license.replace(/\s+/g, '');
  return cleanedLicense;
}

function renderLicenseBadge(license) {
  if (license !== 'NONE') {
    var cleanedLicense = removeSpaceFromLicense(license);
    return `![Github License](https://img.shields.io/badge/license-${cleanedLicense}-red.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'NONE') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== 'NONE') {
    return `## License ##
    
    This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Contents

-> Dependencies

-> Installation

-> Testing

-> Usage

-> Contributions

-> Contact the Developer

## Dependencies

${data.dependent}

## Installation

To install the required dependencies, run the following command:

${data.installation}

## Testing

To test this application, run the following command:

${data.test}

## Usage

${renderLicenseBadge(data.license)}

${data.usage}

## Contributions

${data.contribution}

## Contact the Developer

You can find more of my work on my GitHub profile here: ${data.user}

And you can contact me with any questions or requests here: ${data.email}
`;
}

module.exports = generateMarkdown;
