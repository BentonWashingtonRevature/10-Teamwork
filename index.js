const inquirer = require('inquirer');
const fs = require('fs');
// const generateHTML = require('./utils/generateHTML');

const allEmployees = [];

function internQuestions() {
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
            name: 'school',
            type: 'input',
            message: 'What school do you attend?'
        },
        {
            name: 'next',
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['Add an engineer', 'Add an intern', 'Finished']
        }
    ])
        .then((response) => {
            if (response.next === 'Add an engineer') {
                engineerQuestions()
            } else if (response.next === 'Add an intern') {
                internQuestions()
            } else if (response.next === 'Finished') {
                console.log('DONE!')
            } else {
                return ERROR
            }
        })
}

function engineerQuestions() {
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
            name: 'github',
            type: 'input',
            message: 'What is your Github username?'
        },
        {
            name: 'next',
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['Add an engineer', 'Add an intern', 'Finished']
        }
    ])
        .then((response) => {
            if (response.next === 'Add an engineer') {
                engineerQuestions()
            } else if (response.next === 'Add an intern') {
                internQuestions()
            } else if (response.next === 'Finished') {
                console.log('DONE!')
            } else {
                return ERROR
            }
        })
}

function managerQuestions() {
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
            message: 'What is your office #?'
        },
        {
            name: 'next',
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['Add an engineer', 'Add an intern', 'Finished']
        }
    ])
        .then((response) => {
            // const {name, id, email, office, next} = response;
            // const manager = new Manager()
            if (response.next === 'Add an engineer') {
                engineerQuestions()
            } else if (response.next === 'Add an intern') {
                internQuestions()
            } else if (response.next === 'Finished') {
                console.log('DONE!')
            } else {
                return ERROR
            }
        })
}

//     .then((response) => {
//             fs.writeFile("Team.html", generateHTML(response), err =>
//                 err ? console.log(err) : console.log('Success!'))
//         })
;


managerQuestions();


