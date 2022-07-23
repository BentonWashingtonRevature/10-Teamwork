const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');

function questions() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is your name?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is your ID?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email?'
        },
        {
            name: 'office',
            type: 'input',
            message: 'What is your name office #?'
        },
        {
            name: 'next',
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['Add an engineer', 'Add an intern', 'Finished']
        }
    ])
        .then((response) => {
            console.log(response);
            if (next === 'Add an engineer') {
                questions()
            } else if (next === 'Add an intern') {
                questions()
            } else {
                console.log('Done!')
            }
    })
        
//     .then((response) => {
//             fs.writeFile("Team.html", generateHTML(response), err =>
//                 err ? console.log(err) : console.log('Success!'))
//         })
    };

questions();