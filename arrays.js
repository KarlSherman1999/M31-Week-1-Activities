let array = [1,2,3,4,5,6];

console.log(array);
array.push(7,8);
console.log(array);
// array.push adds a piece of data to the end of the list (like append in python)
// array.pop will remove the last item from the list

for(let i = 0; i<array.length;i++){
    console.log(array[i]);
}
// this is a loop, i will increment by one until it has hit the number of items withing the array

let multiplesTwo = [];

for(let i = 0; i<20; i++){
    if(i % 2==0){
        multiplesTwo.push(i);
    }
}
console.log(`the numbers divisible by 2 and 20 are ${multiplesTwo}`)
// this will log and add all numbers that are multiples of 2 to the array by using modulus

const sumOfNums = (min,max) => {
    let sums = 0;
    for(let i = min; i <= max; i++){
        sums += i;
    }
    return sums
}
console.log(`Sum of all numbers from 1 to 10 is ${sumOfNums(1,10)}.`);
// this calculates the sum of all numbers between

let age = 15;
while( age < 18 ){
    console.log("You're a child!");
    age++;
}
console.log("You're an adult!");
// this will lot that if you are below 18 that you are a child until it hits 18

let randomNumber = 0;
while(randomNumber < 10) {
    console.log("Random no. " + randomNumber + "\n Keep looping");
    randomNumber = (Math.round(Math.random() * 20));
}
console.log("No more looping, with random no. " + randomNumber);
// this keeps logging a random number until it hits a number 10 or more

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";
while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);

// this will use a random number gen to link to the array above and uses a while loop so that it will keep trying cards until you get spade