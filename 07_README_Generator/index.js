//README Generator

const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'project_description',
        message: 'Description?'
    },
    {
        type: 'input',
        name: 'project_install',
        message: 'List Installation Instructions:'
    },
    {
        type: 'input',
        name: 'project_usage',
        message: 'Provide usage information:'
    },
    {
        type: 'input',
        name: 'project_contribution',
        message: 'How can someone contribute?'
    },
    {
        type: 'input',
        name: 'project_tests',
        message: 'Testing Guidelines:'
    },
    {
        type: 'list',
        name: 'badge',
        message: 'Choose a license for this project:',
        choices: ['MIT', 'ISC', 'Zlib']
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email Address:'
    },
    {
        type: 'input',
        name: 'github_username',
        message: 'Enter your GitHub Username:'
    }
]

const readMeContent = function(answer){
    const title = answer.project_title;
    const description = answer.project_description;
    const installation = answer.project_install;
    const usage = answer.project_usage;
    const contribute = answer.project_contribution;
    const tests = answer.project_tests;
    const badge = answer.badge;
    const email = answer.email;
    const github = answer.github_username;
    
    // let licensing;

    return `# ${title}
[![License: ${badge}](https://img.shields.io/badge/License-${badge}-blue.svg)](https://opensource.org/licenses/${badge})
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribute](#contribute)
5. [Testing](#testing)
6. [Questions](#questions)
7. [Licensing](#licensing)
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Contribute
${contribute}
## Testing
${tests}
## Questions?
* ${email}
* [Github Profile](https://github.com/${github}).
## Licensing`
}

inquirer.prompt(questions).then((data) => {
    const filename = 'README.md';
    
    fs.writeFile(filename, readMeContent(data), (err) =>
      err ? console.log(err) : console.log('README Generated!')
    );
});