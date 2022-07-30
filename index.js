const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./utils/generateHTML');
const allEmployees = [];

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
                const {name, id, email, office} = response;
                const manager = new Manager(response.name, response.id, response.email, response.office);
                allEmployees.push(manager);
                if (response.next === 'Add an engineer') {
                    engineerQuestions()
                } else if (response.next === 'Add an intern') {
                    internQuestions()
                } else if (response.next === 'Finished') {
                    console.log(allEmployees);
                    fs.writeFile("index.html", generateHTML(allEmployees), err =>
                    err ? console.log(err) : console.log('Success!'));
                } else {
                    return ERROR
                }
            })
    }
    


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
            const {name, id, email, school} = response;
            const intern = new Intern(response.name, response.id, response.email, response.school);
            allEmployees.push(intern);
            if (response.next === 'Add an engineer') {
                engineerQuestions()
            } else if (response.next === 'Add an intern') {
                internQuestions()
            } else if (response.next === 'Finished') {
                fs.writeFile("index.html", generateHTML(allEmployees), err =>
                err ? console.log(err) : console.log('Success!'));
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
            const {name, id, email, github} = response;
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            if (response.next === 'Add an engineer') {
                engineerQuestions()
            } else if (response.next === 'Add an intern') {
                internQuestions()
            } else if (response.next === 'Finished') {
                fs.writeFile("index.html", generateHTML(allEmployees), err =>
                err ? console.log(err) : console.log('Success!'));
            } else {
                return ERROR
            }
        })
}


managerQuestions();


