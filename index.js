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
        // Harrison's read me
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'how do you install your app?',
        name: 'installation',
        // inquirer
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'instructions to be follow?',
        name: 'instructions',
        //First you can open up the file in VS code. Second open up the terminal, then change the directory
        // into the root folder, and run ‘node index.js’. 
        //Answer the prompts and view the preview of the ‘README.md’.
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'any credits?',
        name: 'credit',
        // 3
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'how do you use your app?',
        name: 'usage',

    // After the installation "inquirer": "^8.2.4" is complete, run the following code in the terminal ‘node inex.js’. 
    // You then answer the prompts after it is done you should see a console log showing your answers to your prompts,
    // a message then says ‘your readme has been generated’, you should then see it is called ‘README.md’.
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
        //https://github.com/HarrisonZussman/Read_Me_GEN
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'email',
        name: 'email',
        //harrisonfzussman@gmail.com
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

 createNewFile(template);
}
);

// TODO: Create a function to write README file
function createNewFile(data){
    fs.writeFile(`./README.md`,data,(err)=>{
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
