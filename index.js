const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/Circle");
const Triangle = require("./lib/Triangle");
const Square = require("./lib/Square");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter text to display on SVG (3 characters)",

    },
    {
        type: "input",
        name: "text_color",
        message: "Enter a color for the text on SVG",
        
    },
    {
        type: "list",
        name: "shape",
        message: "Select a shape to display on SVG",
        choices: ["Circle", "Triangle", "Square"]
      },
      {
        type: "input",
        name: "shape_color",
        message: "Enter a color for the shape on SVG",
        
    },
       
     
];
function generateSVG(data) {
    return `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${data}
    </svg>`
 
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let file_contents = generateSVG(data)
    console.log(file_contents)
    fs.writeFile(fileName, file_contents, err => {
        if (err) {
          console.error(err);
        }
        else {
            console.log("Generated logo.svg")
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then ((answers)=>{
        console.log(answers)
        let shape;
        if (answers.shape == "Circle"){
            shape = new Circle() 
        }
        else if (answers.shape == "Triangle"){
            shape = new Triangle()
        }
        else if (answers.shape =="Square"){
            shape = new Square()
        }
        shape.setColor(answers.shape_color)
        shape.setText(answers.text)
        shape.setTextColor(answers.text_color)
        console.log(shape.render())
        writeToFile("examples/logo.svg",shape.render())
    })
}

// Function call to initialize app
init();
