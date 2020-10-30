// declare class

// export class using module.exports

class Shape {
    constructor() {
        this.color="red";
    }
    drawShape() {
        console.log("No shape is given");
    } 
    calculateArea() {
        console.log("No shape No Area");
    }
}
module.exports=Shape;
