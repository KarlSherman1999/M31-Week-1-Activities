let name = "Karl"
let age = 22
let favouriteColour = "purple"

console.log(`My name is ${name}, I am ${age} years old and my favourite colour is ${favouriteColour}.`)

let breakfast = "Shreddies"
let lunch = "Ham sandwich"
let dinner = "Cottage pie"

console.log(`For breakfast i had ${breakfast}. For lunch i had ${lunch} and for dinner i had ${dinner}`);

let firstDate = new Date(`1,11,2021`);
let secondDate = new Date(`16,07,2022`);
let firstCalc = console.log(Math.abs(secondDate - firstDate));
let secondCalc = Math.floor(firstCalc / (1000 * 60 * 60 * 24));  

console.log(secondCalc);