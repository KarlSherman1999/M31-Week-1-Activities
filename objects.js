const person = {
    name:"Karl",
    age: 22
}
// person is an object made to store data which we can pull out from
const sayHi = () => {
    console.log(`my name is ${person.name} and i am ${person.age} years old.`);
}
// you can use bracket notation to give flexibility to your object e.g. person[name]
sayHi()
// makes the function activate

const pet = {
    typeOfPet: "dog" , 
    age: 5 ,
    colour: "white",
    name:"Blossom"
}
const eat = () => {
    console.log(`Your pet ${pet.typeOfPet} ${pet.name} is currently eating`)
}
const drink = () => {
    console.log(`Your pet ${pet.typeOfPet} ${pet.name} is currently drinking`)
}
// this also calls data from the object (pet) and uses it within both functions

const coffeeShop = {
    branch: "Starbucks",
    drinks:[
        "Espresso",
        "Frappucino",
        "latte"
    ],
    drinkprice:["0.80","0.90","0.70"],
    food:[
        "Sandwich",
        "Cake"
    ],
    foodPrice:["1.50","1.30"]
}
const drinksOrdered = (drinks) => {
    console.log(`You ordered an ${coffeeShop.drinks[drinks]}. Your total cost is ${coffeeShop.drinkprice[drinks]}`)
}
const foodOrdered = (food) => {
    console.log(`You ordered an ${coffeeShop.food[food]}. Your total cost is £${coffeeShop.foodPrice[food]}`)
}
drinksOrdered(1)
foodOrdered(1)


const alarm = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
}
const dayOfWeek = () =>{
    if (day = "monday"||"tuesday"||"wednesday"||"thursday"||"friday")
    console.log(alarm.weekdayAlarm);
    else if (day = "saturday"||"sunday")
    console.log(alarm.weekendAlarm)
}

dayOfWeek("monday")