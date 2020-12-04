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




    `;

}

module.exports = generateReadme;