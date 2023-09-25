import('inquirer').then(module => {
    const inquirer = module.default;

    const questions = [
        {
            type: 'list',
            name: 'month',
            message: 'Select the month:',
            choices: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        {
            type: 'input',
            name: 'day',
            message: 'Enter the day of the month (1-31):',
            validate: function(value) {
                var valid = !isNaN(parseFloat(value)) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
                if (valid && value >= 1 && value <= 31) {
                    return true;
                }
                return 'Please enter a valid day of the month (1-31)';
            }
        },
        {
            type: 'input',
            name: 'time',
            message: 'What time (HH:MM)?'
            // You can add validation here as well
        },
        {
            type: 'list',
            name: 'meridiem',
            message: 'AM or PM?',
            choices: ['AM', 'PM']
        },
        {
            type: 'list',
            name: 'timezone',
            message: 'Which timezone?',
            choices: ['PST', 'EST', 'CST', 'MST']
        },
        {
            type: 'input',
            name: 'imagePath',
            message: 'Path to the image (e.g., ./assets/myImage.png):'
        }
    ];

    inquirer.prompt(questions).then(answers => {
        console.log('\nStream Details:');
        console.log('-----------------');
        console.log(`Date: ${answers.month} ${answers.day}`);
        console.log(`Time: ${answers.time} ${answers.meridiem} ${answers.timezone}`);
        console.log(`Image Path: ${answers.imagePath}`);
    });

}).catch(error => {
    console.error('Error importing inquirer:', error);
});
