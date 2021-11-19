console.log("Hello World");
// object.property e.g. car.startengine();
let word = "hello";
// gives the method an assigned piece of data
const string2 = "hello";
// const protects the data from being changed (let can be changed)
word.length
// will determine the length of the string
console.log(word);
console.log(word.length);
// console.log will print any data into the terminal

function myfunc(){
    return "hello";
}
console.log(myfunc());
// example of a function that will output hello in the terminal

console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log("    hello   ".trim());

console.log(Math.random());
// prints a random number between 0 and 1
console.log(Math.floor(Math.random())*10);
// math.floor rounds a number

let string = "all around the world"
console.log(string.charAt(8));
// finds the character at the seventh place in the string (zero index)

let myarray = [
    ["first", "second","third"]
    [4,5,6]
];
console.log(myarray[0,0]);
// this is a list and the console command prints out the first from the list

let favouriteDrink = "Coffee";
console.log(favouriteDrink);
console.log(`My favourite drink is ${favouriteDrink}`);
// this lets you inject data from a variable into a string