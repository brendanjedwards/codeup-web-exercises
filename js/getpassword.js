// Define a function named getPassword() which performs the following actions:
//     Using prompt(), alert(), variables, and a while-loop, ask the user to input their password until their entry
//     matches your hard-coded password value.
//     HINT: start by defining the correct password and don't forget to link your html file

function getBetterPassword2() {
    let answer = "howdy";
    let attempts = 0;
    let guess;
    do {
        guess = prompt("Enter your password: ");
        attempts++;
    } while(guess !== answer && attempts < 3);
    if(guess === answer) {
        alert("ok");
    } else {
        alert("not ok");
    }
}
