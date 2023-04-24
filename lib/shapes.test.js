
const Circle = require('./Circle');
const Square = require('./Square');
const Triangle = require('./Triangle');
const Shape = require ('./Shape');

// Imports the Circle, Square, and Triangle shape classes from the 'shapes.js' module and defines a test suite for the shape class.  
// The test case checks whether "Cricle, Square, and Triangle" object can be rendered correctly by calling the render method and comparing the result to an expected SVG string.

// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="100" cy="100" r="100" height="100" width="100" fill="${color}" />
        <text x="200" y="200" fill="null">null</text>`);
    });
  });
  // Square Shape
  describe('Square', () => {
      test('renders correctly', () => {
        const shape = new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="10" y="10" width="30" height="30" fill="${color}"/> 
        <text x="200" y="200" fill="null">null</text>`);
      });
    });
  // Triangle Shape
  describe('Triangle', () => {
      test('renders correctly', () => {
        const shape = new Triangle();
        var color =('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}"/>
        <text x="200" y="200" fill="null">null</text>`);
      });    
    });