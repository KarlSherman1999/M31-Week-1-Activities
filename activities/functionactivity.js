// let size = "large"
// let typeOfDrink = "espresso"
// let coffeeOrder = (size,typeOfDrink) => {
//     console.log(`You ordered a ${size} ${typeOfDrink}`)
// }

// coffeeOrder(size,typeOfDrink);

let currentStock = {
    pepsi: 1,
    coke: 50,
    water: 20,
}

const drinkStock = (drink) => {
    if (currentStock[drink] > 0){
        return true;
    } else {
        return false;
    }
}

const drinkRequest = (credit, drink) => {
    if (drinkStock(drink) && credit >= 1){
        currentStock[drink]--;
        console.log(`Here's your ${drink}`);
    } else {
        console.log(`Sorry ${drink} is out of stock`);
    }
}

drinkRequest(2, "pepsi");
drinkRequest(2, "pepsi");


