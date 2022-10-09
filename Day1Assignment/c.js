// area of cylinder using JS objects
const PI = 3.14
let cylinder ={
    radius: 4,
    height: 6,
    Area: function(){
        return PI*cylinder.radius**2*cylinder.height
    }
}
console.log(cylinder.Area())