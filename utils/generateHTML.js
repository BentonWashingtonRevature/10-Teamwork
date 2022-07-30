function addEmployee(allEmployees) {
    allEmployees.map(employee => {
        console.log(employee);
        if (employee.office) {
            return `
            <ul class="list-group">
                <li class="list-group-item active">MANAGER</li>
                <li class="list-group-item active">${employee.name}</li>
                <li class="list-group-item active">${employee.id}</li>
                <li class="list-group-item active">${employee.email}</li>
                <li class="list-group-item active">${employee.office}</li>
            </ul>`;
        } else if (employee.github) {
            return `
            <ul class="list-group">
                <li class="list-group-item active">ENGINEER</li>
                <li class="list-group-item active">${employee.name}</li>
                <li class="list-group-item active">${employee.id}</li>
                <li class="list-group-item active">${employee.email}</li>
                <li class="list-group-item active">${employee.github}</li>
            </ul>`;
        } else if (employee.school) {
            return `
            <ul class="list-group">
                <li class="list-group-item active">INTERN</li>
                <li class="list-group-item active">${employee.name}</li>
                <li class="list-group-item active">${employee.id}</li>
                <li class="list-group-item active">${employee.email}</li>
                <li class="list-group-item active">${employee.school}</li>
            </ul>`;
        } else {
            return 'ERROR!';
        }
    }
    )
}

function generateHTML(allEmployees) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    
    <head>
        <title>Teamwork</title>
    
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
    
        ${addEmployee(allEmployees)}


    </body>
    </html>`
}

module.exports = generateHTML;