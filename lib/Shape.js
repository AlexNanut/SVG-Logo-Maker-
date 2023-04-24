class Shape {
    constructor (){
        this.text = null 
        this.text_color = null
        this.shape_color = null
    }
    setColor (shape_color){
        this.shape_color = shape_color
    }
    setTextColor (text_color){
        this.text_color = text_color
    }
    setText (text){
        this.text = text 
    }
    getColor () {
        return this.shape_color 
    }

    getTextColor () {
        return this.text_color
    }

    getText () {
        return this.text
    }
    rendertext (){
        return `<text x="200" y="200" fill="${this.text_color}">${this.text}</text>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
}
module.exports = Shape