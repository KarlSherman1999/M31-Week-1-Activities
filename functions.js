const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}
pressGrindBeans();
// a different way of using functions using the arrow function
let onOff = true
const pressButton = () => {
    if (onOff){
        console.log("Bool is true");
        onOff = false;
    } else {
        console.log("Bool is false");
        onOff = true;
    }
}

pressButton();
pressButton();
pressButton();
// on and off example function

const cashWithdrawal = (amount, accnum) => {
    console.log(`withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal(300,50449921);

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};
console.log("The temperature is " + getFahrenheit(15) + "°F");


const powerNum = (num1,num2) => {
    console.log(num1**num2)
}
powerNum(2,4)