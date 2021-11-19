let music = "Classical";

if (music == "Classical"){
    console.log("Not classic music again");
}
else if (music == "no music"){
    console.log("finally some peace and quiet");
}
else {
    console.log("Nice and noisy");
}
// this is a functional if statement 
// && is and , || is or 

const grade = 87;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}
// another way of creating an if statement using the switch function (can be neater for nesting)

function checkToppingSwitch(topping){
    switch (topping) {
        case "cheese":
        case "BBQ":
        case "tomato":
            console.log("yup, yup, yup...");
            break;
        case "ham":
            console.log("only if it's with pineapple...");
            break;
        default:
            console.log(`Not a fan of ${topping} on my pizza, weirdo`);
            break;
    }
}

checkToppingSwitch("cheese");
checkToppingSwitch("tomato");
checkToppingSwitch("ham");
checkToppingSwitch("dirt");

function checkToppingIf(topping){
    if (topping == "cheese" || topping == "BBQ" || topping == "tomato"){
        console.log("yup, yup, yup...");
    } else if(topping == "ham"){
        console.log("only if it's with pineapple...");
    } else {
        console.log(`Not a fan of ${topping} on my pizza, weirdo`);
    }
}

checkToppingIf("cheese");
checkToppingIf("tomato");
checkToppingIf("ham");
checkToppingIf("dirt");