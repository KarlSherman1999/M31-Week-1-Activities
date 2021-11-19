// Challenge 1
let password = "Chickenpie"
if (password.length >= 8)
console.log(password)
else if (password.length < 8)
console.log("Password is not long enough")

// Challenge 2
let num = 4
switch(true){
    case num % 3 === 0 || num % 5 === 0:
        console.log("This number is divisible by 3 or 5");
        break;
    default:
        console.log("This number is not divisible by 3 or 5");
        break;
}

// Challenge 3
let num = 3
if (num % 3 === 0 && num % 5 === 0)
console.log("fizz buzz");
else if (num % 5 === 0)
console.log("buzz");
else if (num % 3 === 0)
console.log("fizz");

// Challenge 4
let num = 1001
function checkPalindrom(){
    return true;
}
checkPalindrom(num)