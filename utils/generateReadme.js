function generateReadme(answers) {
    return `
    # ${answers.title}\n

    ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)\n

    ## Description
        ${answers.description}\n

    ## Table of Contents
    -[Description](#description)
    -[Installation](#installation)  
    -[Usage](#usage)
    -[License](#license)  
    -[Contribution](#contribution)
    -[Questions](#questions)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## License
    ![badge](https://img.shields.io/badge/license-${answers.license}-lightblue)\n
    This application is covered by tthe ${answers.license} license.

    ## Contributing
    ${answers.contribution}

    ## Questions
    Find me on GitHub: [${answers.github}](https://github.com/${answers.github})\n
    
    Email me with any questions at ${answers.email}\n

    #### This README was created using [Read-Me-Generator](https://github.com/hlamkins/Read-Me-Generator)


    `;

}

module.exports = generateReadme;