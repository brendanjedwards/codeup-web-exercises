// Write a function named getFizzBuzz(startingNum) which performs the following actions:
//     If startingNum is divisible by 3
// console log "fizz"
// Else, if startingNum is divisible by 5
// console log "buzz"
// If startingNum is divisible by 3 AND divisible by 5
// return a string which says "FIZZ BUZZ"
// Thinking about getFizzBuzz(startingNum), let's console log the return value of this function
// What if getFizzBuzz doesn't return a value (VOID)?
// How do you want to handle that?

function getFizzBuzz(startingNum) {
    //     If startingNum is divisible by 3
    if (startingNum % 3 === 0) {
        console.log("fizz");
    }
    if (startingNum % 5 === 0) {
        console.log("buzz");
    }
    if (startingNum % 3 === 0 && startingNum % 5 === 0) {
        return "FIZZ BUZZ";
    }
}
var myReturnVal = getFizzBuzz (15);
console.log(myReturnVal);