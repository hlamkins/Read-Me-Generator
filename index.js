const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require(".utils/generateReadme");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "list",
        name: "license",
        message: "What type of license does your project have?",
        choices: [
            "MIT",
            "Apache",
            "Boost",
            "WTFPL"
        ]
    },
    {
        type: "input",
        name: "constribution",
        message: "What does the user need to know about contributing to the repo?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your gitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
]);
   
async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Sucessfully wrote to README.md');
    }
    catch(err) {
        console.log('There were issues writing to README.md')
    }
}

init();



 