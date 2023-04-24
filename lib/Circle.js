const Shape = require("./Shape");

class Circle extends Shape {
    render() {
        let svgtext = this.rendertext()
        return `<circle cx="100" cy="100" r="100" height="100" width="100" fill="${this.shape_color}" />
        ${svgtext}`;
    }
}
module.exports = Circle