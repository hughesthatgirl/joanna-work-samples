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
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'The Unlicense', 'None'  ] 
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

    let badgeImg;
    let badgeDisclaimer;

    if (badge == 'Apache License 2.0'){
        badgeImg = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        badgeDisclaimer = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
    }

    if (badge == 'GNU General Public License v3.0'){
        badgeImg = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        badgeDisclaimer = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
    }

    if (badge == 'MIT License'){
        badgeImg = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        badgeDisclaimer = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
    }

    if (badge == 'The Unlicense'){
        badgeImg = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        badgeDisclaimer = 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.'
    }

    if (badge == 'None'){
        badgeImg = '';
        badgeDisclaimer = 'No License Requirements'
    }

    return `# ${title}
${badgeImg}
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
## Licensing
* ${badge}
* ${badgeDisclaimer}`
}

inquirer.prompt(questions).then((data) => {
    const filename = 'README.md';

    fs.writeFile(filename, readMeContent(data), (err) =>
      err ? console.log(err) : console.log('README Generated!')
    );
});