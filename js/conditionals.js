"use strict";
/* ########################################################################## */
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color){
//     if (color === "blue"){
//         return "blue is the color of the sky"
//     }else if (color === "red"){
//         return "Strawberries are red"
//     }else{
//        return "I don't know that color"
//     }
// }

//console.log (analyzeColor (randomColor));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor % randomColor);
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor (color){
//     switch(color){
//         case "blue":
//             alert("blue is the color of the sky")
//             break
//         case "red":
//             alert("Strawberries are red")
//             break
//         default:
//             alert(color + "I don't know about that color");
//             break;
//         }
//     }
//     analyzeColor(randomColor)
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//let userInput = prompt("Give me a color")
//analyzeColor(userInput)

/* ########################################################################## */
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(number, total){
    if (number === 0){
        console.log("No Discount")
    }else if (number === 1){
        let discount10 = total - total * .10;
        console.log(`Discount: 10%. New Total: $${discount10}`);
    }else if (number === 2){
        let discount25 = total - total * .25;
        console.log(`Discount: 25%. New Total: $${discount25}`);
    }else if (number === 3) {
        let discount35 = total - total * .35;
        console.log(`Discount: 35%. New Total: $${discount35}`);
    }else if (number === 4) {
        let discount50 = total - total * .50;
        console.log(`Discount: 50%. New Total: $${discount50}`);
    }else if (number === 5){
        console.log("FREE")
    }
}
calculateTotal(5, 100)

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// In this line of code, 0 is inclusive, and 6 is exclusive

let userInput = prompt("What was you total bill?")
const randomNumber = Math.trunc(Math.random()*6)

calculateTotal(randomNumber, userInput)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.

 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

const userConfirm = confirm("Would you like to enter a number?");
let userNumber = 0;
if (userConfirm === true){
    userNumber = parseInt(prompt("Do you want a number?"))
}
function isEvenOrOdd (number){
    if (number % 2 === 0){
        alert("Your number is Even");
    }else{
        alert("Your Number is Odd");
    }
}
function isNumberPlus100(number){
    alert(`${number + 100}`)
}
function isPosOrNeg (number){
    if (number > 0){
        alert("Positive")
    }else if (number < 0){
        alert("Negative")
    }
}
isEvenOrOdd(userNumber);
isNumberPlus100(userNumber);
isPosOrNeg(userNumber);