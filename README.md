Object Oriented Programming SVG LOGO MAKER


  
## Description:
The application enables users to enter inputs into a inquirer prompt in order to generate a logo "logo.svg" file which contains the users desired results as an SVG image.

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)


# Overview

## The Challenge:
Build a Node.js command-line application that takes in user inputs to generates a SVG logo and saves it as "logo.svg" file. In addition, create a walkthrough video that demonstrates its functionality and the passing of all of the tests.


## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```


## Screenshots:
### Figure 1. Command line application
<img width="1440" alt="Command line" src="https://user-images.githubusercontent.com/108309770/233906949-24759ebe-9e9f-432b-92f0-39a02c945560.png">

### Figure 2. Jest Testing "npm test"
<img width="1440" alt="Command line Jest testing" src="https://user-images.githubusercontent.com/108309770/233906969-beac1192-a8e3-4b4a-946f-1537c94b5311.png">




## Built With

- Dynamic JavaScript
- Node.js [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Jest [Version 29.4.3](https://www.npmjs.com/package/jest)
- Inquirer.js: [Version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned
- Create an non-deployed application that invokes a “node index.js” in the command line to generate a logo and save it as a SVG file.
- Learned the JavaScript testing framework "Jest".
### Continued Development:
1. Continue creating SVG files to practice
2. Add more user prompts to create more possibilities among a rendered SVG image.
