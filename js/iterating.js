function(){
    "use strict";

     /**
      * TODO:
      * Create an array of 4 people's names and store it in a variable called 'names'.
      */

     let names = ['John', 'Alex', 'Steve', 'Elizabeth'];

 // loop through the array and log the values
     names.forEach(function(name) {
         console.log('Here is a lovely name: ' + name + '.');
     });

     /**
      * TODO:
      * Create a log statement that will log the number of elements in the names array.

     let names = ['John', 'Alex', 'Steve', 'Elizabeth'];

     console.log(names.length); // 4

    // /**
    //  * TODO:
    //  * Create log statements that will print each of the names individually by accessing each element's index.

     let names = ['John', 'Alex', 'Steve', 'Elizabeth'];

 //  loop through the array and log the values
         names.forEach(function(name) {
             console.log('Here is a lovely shape: ' + name + '.');
     });


    //  * TODO:
    //  * Write some code that uses a for loop to log every item in the names array.

     let names = ['John', 'Alex', 'Steve', 'Elizabeth'];

     let someArray;
     someArray.forEach(function(element, index, array) {
                 // ...

          loop through the array and log the values
             names.forEach(function(name) {
                 console.log('Here is a lovely name: ' + name + '.');
             });

         // /**
         //  * TODO:
         //  * Refactor your above code to use a `forEach` loop
         //  */

         /**
          * TODO:
          * Create the following three functions, each will accept an array and
          * return an an element from it
          * - first: returns the first item in the array
          * - second: returns the second item in the array
          * - last: returns the last item in the array
          *
          * Example:
          *  > first([1, 2, 3, 4, 5]) // returns 1
          *  > second([1, 2, 3, 4, 5]) // returns 2
          *  > last([1, 2, 3, 4, 5]) // return 5
          */
            const numbers = [1, 2, 3, 4, 5];
            (function findFirst() {
                console.log(numbers[0]);
         })();
            (function findSecond() {
                console.log(numbers[1]);
         })();
            (function findLast() {
                let last =numbers.length;
                console.log(last)
     })();
         console.log(first(names));
         console.log(second(names));
         console.log(last(names));
})();