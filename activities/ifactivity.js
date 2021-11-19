let country = "America"
let age = 37
switch (true){
    case age >= 18 && country == "UK":
        console.log("You are of legal age to drink in the UK");
        break;
    case age >= 25 && country == "America":
        console.log("You are of legal age to drink in America");
        break;
    default:
        console.log("You are not of legal age to drink")
}

let topping = "Pepperoni"


if (topping == "Pepperoni" || "Bacon")
    console.log("This is a must topping for the pizza");
else if (topping == "Onions")
    console.log("I dont like onions on my pizza");
else if (topping == "sausage" || "Ham")
    console.log("I dont mind these toppings")
else
    console.log("sorry we do not have these toppings available")

