const Shape = require("./Shape");

class Square extends Shape {
    render() {
        let svgtext = this.rendertext()
        return `<rect x="10" y="10" width="30" height="30" fill="${this.shape_color}"/> 
        ${svgtext}`
    }
}
module.exports = Square