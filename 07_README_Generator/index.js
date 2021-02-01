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
    }
    // {
    //     type: 'input',
    //     name: 'project_install',
    //     message: 'List Installation Instructions:'
    // },
    // {
    //     type: 'input',
    //     name: 'project_usage',
    //     message: 'Provide usage information:'
    // },
    // {
    //     type: 'input',
    //     name: 'project_contribution',
    //     message: 'How can someone contribute?'
    // },
    // {
    //     type: 'input',
    //     name: 'project_tests',
    //     message: 'Testing Guidelines:'
    // },
    // {
    //     type: 'list',
    //     name: 'badge',
    //     message: 'Choose a license for this project:',
    //     choices: ['MIT', 'ISC', 'Zlib']
    // }
    // {
    //     type: 'input',
    //     name: 'email',
    //     message: 'Enter your Email Address:'
    // },
    // {
    //     type: 'input',
    //     name: 'github_username',
    //     message: 'Enter your GitHub Username:'
    // }
]

inquirer.prompt(questions).then((data) => {
    const filename = 'README.md';

    const title = data.project_title;
    const description = data.project_description;
    // const installation = data.project_install;
    // const usage = data.project_usage;
    // const contribute = data.project_contribution;
    // const tests = data.project_tests;
    // const badge = data.badge;
    // const email = data.email;
    // const github = data.github_username;
    
    // let licensing;


    const body = `# ${title} ## ${description}`;
    

    fs.writeFile(filename, body, (err) =>
      err ? console.log(err) : console.log('README Generated!')
    );
});