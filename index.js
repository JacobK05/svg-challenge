const inquirer = require('inquirer');
const fs = require('fs');
const { Square } = require('./lib/square.js');
const { Circle } = require('./lib/circle.js');
const { Triangle } = require('./lib/triangle.js');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter three characters.',
            name: 'characters',
        },
        {
            type: 'input',
            message: 'Enter text color.',
            name: 'textColor',
        },
        {
            type: 'rawlist',
            message: 'Choose a shape from the list below.',
            choices: [
                { name: 'Square', value: 'Square' },
                { name: 'Circle', value: 'Circle' },
                { name: 'Triangle', value: 'Triangle' },
            ],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Enter shapes color.',
            name: 'shapeColor',
        },
    ])
    
    .then(async (response) => {
        let shape;
        switch (response.shape) {
          case 'Square':
            shape = new Square(response.characters, response.shapeColor, response.textColor);
            break;
          case 'Circle':
            shape = new Circle(response.characters, response.shapeColor, response.textColor);
            break;
          case 'Triangle':
            shape = new Triangle(response.characters, response.shapeColor, response.textColor);
            break;
        }
    
        try {
          await promises.writeFile('./examples/logo.svg', shape.render());
          console.log("Generated logo.svg");
        } catch (error) {
          console.error(error);
        }
      });
  