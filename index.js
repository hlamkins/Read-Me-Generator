const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadme = require("./utils/generateReadme");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
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
            name: "contribution",
            message: "Who made contributions to the repo or can make contributions?"
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
}    
   
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



