// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer.prompt(
[
    {
        type: 'input',
        message: "what's the project title?",
        name: 'title',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'how do you install your app?',
        name: 'installation',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'instructions to be follow?',
        name: 'instructions',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'any credits?',
        name: 'credit',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'how do you use your app?',
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'list',
        message: 'what license did you used?',
        name: 'license',
        choices: ['ISC','the MIT license', 'the GPL license', 'apache license', 'GNU license', 'N/A'],
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'GitHub username:',
        name: 'git',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'email',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    }
]

).then(({
title,
installation,
instructions,
credit,
license,
git,
email,
usage,
}) => {
const template = `# ${title}
* [installation](#installation)
* [usage](#usage)
* [contribution](#contribution)
* [credit](#credit)
* [license](#license)

# installation
${installation}

## usage
${usage}

### instructions
${instructions}
## credit
${credit}
## license:
${license}

# contact
* GitHub: ${git}
* email: ${email}`;

 createNewFile(title, template);
}
);

// TODO: Create a function to write README file
function createNewFile(fileName,data){
    fs.writeFile(`./${fileName.toLowerCase()}.md`,data,(err)=>{
if(err){
    console.log(err)
}
console.log('your readme has been generated');
})
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
