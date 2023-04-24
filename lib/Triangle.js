const Shape = require("./Shape");

class Triangle extends Shape {
 
    render() {
        let svgtext = this.rendertext()
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shape_color}"/>
        ${svgtext}`;
    }
}
module.exports = Triangle