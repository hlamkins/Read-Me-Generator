function generateReadme(answers) {
    return `
# ${answers.title}

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

## Description
${answers.description}

## Table of Contents
-[Description](#description)\n
-[Installation](#installation)\n 
-[Usage](#usage)\n
-[License](#license)\n
-[Contribution](#contribution)\n
-[Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-lightblue)
This application is covered by tthe ${answers.license} license.

## Contributing
${answers.contribution}

## Questions
Find me on GitHub: [${answers.github}](https://github.com/${answers.github})
    
Email me with any questions at ${answers.email}

#### This README was created using [Read-Me-Generator](https://github.com/hlamkins/Read-Me-Generator)
`;

}

module.exports = generateReadme;