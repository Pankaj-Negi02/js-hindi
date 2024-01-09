// Primitive
// 7 types: String, Number, Boolean, Null, undefind, Symbol, Bigint

// Number
const score = 100
const scoreValue = 100.5

//Boolean
const isLoggedIn = false
const outsideTemp = null

// Undefind
let userEmail;

//Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//Bigint
const bigNum = 12345678912352457n

console.log(typeof bigNum);


// Reference type (Non Primitive)
// Array, Objects, Functions

const students = ["Pankaj", "Raj", "Rohit", "Sanjay"]
let myObj = {
    name: "Pankaj",
    age: 24,
    email: "test@test.com"
}
const myFunc = function(){
    console.log("Hello World")
}
myFunc();
