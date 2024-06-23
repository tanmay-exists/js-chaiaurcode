/*
Primitive: these are call by value
    string, number, boolean, null, undefined, symbol, BigInt

Non-pimitive(Reference):
    Array, Objects, Functions
 */

// defining symbol
const id = Symbol('132')
const anotherId = Symbol('132')
console.log(id==anotherId)
console.log(typeof id)

// BigInt
const bigNumber = 343434894485n
console.log(typeof bigNumber)

// arrray
const heroes = ["shaktiman", "naagraj", "doga"]
console.log(typeof heroes)

// object are inside the curly braces
let myObj = {
    name: "hitesh",
    age: 23,
}

// function
const myFunction = function(){
    console.log("Hello")
}
console.log(typeof myFunction)

let somevalue = null
console.log(typeof somevalue)