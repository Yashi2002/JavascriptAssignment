// area of square and rectangle using this
let rectangle = {
    length: 3,
    breadth: 5,
    area: Area,
}
let square = {
    length: 4,
    breadth: 4,
    area: Area,
}
function Area()
{
    return this.length*this.breadth;
}
console.log(rectangle.area())
console.log(square.area())