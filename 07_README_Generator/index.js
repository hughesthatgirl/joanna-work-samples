const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'first_name',
        message: 'What is your first name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where do you live?'
    },
    {
        type: 'input',
        name: 'job',
        message: 'What do you do for a living?'
    },
    {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?'
    }
]

inquirer.prompt(questions).then((data) => {
    const filename = 'index.html';

    const firstName = data.first_name;
    const location = data.location;
    const job = data.job;
    const food = data.food;

    const styles = `body{max-width: 800px; margin: 0 auto; background-color: #cdcdcd;}
                    main{font-family: sans-serif;}
                    h1{font-size: 42px; font-weight: bold;}
                    p{font-weight: bold;}
                    span {font-weight: normal;}
    `

    const content = `<main>
        <h1>About: <span>${firstName}</span></h1>
        <p>Lives in: <span>${location}</span></p>
        <p>Occupation: <span>${job}</span></p>
        <p>Favorite Food: <span>${food}</span></p>
    </main>`

    const app = `<html>
                    <head>
                        <style>
                            ${styles}
                        </style>
                    </head>
                    <body>${content}</body>
                </html>`

    fs.writeFile(filename, app, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});