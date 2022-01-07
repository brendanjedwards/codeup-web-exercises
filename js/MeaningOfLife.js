console.log(getMeaningOfLife)
// Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum. This function will use a 'while
// loop' to compare its current number (a variable named counter) against the meaningfulNum. While the counter is not
// equivalent to the meaningfulNum, continue the loop. Once that condition is broken (i.e., the loop’s test fails),
// console log a string telling the user "The meaning of life, the universe, and everything is [your meaningful number]"
// Thinking about the above function, getMeaningOfLife, let’s ask a question: What happens if the value of meaningfulNum
// is a non-numeric? Write some code to account for this case. How the function handles the situation is up to you!
// Let’s continue with getMeaningOfLife: If the value of meaningfulNum happens to be 42, console log a separate message
// at the end of the function to say: "Did you bring your towel?"


function getMeaningOfLife(meaningfulNum) {
    let counter = 50;

    //while counter is not meaningfulNum
    while (counter !== meaningfulNum) {
        //decrement counter
        counter--;
    }
    console.log("The Meaning of Life the Universe and Everything is " + counter);
}

getMeaningOfLife(42);