(function() {
    "use strict";

    /**
     * TODO:
     * With your first and last name. Store this object in a variable named
     * `person`.
     * Create an object with firstName and lastName properties that are strings
     * w
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
let person = {
    firstName: 'John',
    lastName: 'Smith'
}
console.log(person.firstName);
console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

person.sayHello = function (){
    return `Hello from ${this.firstName} ${this.lastName}`;
}
console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320},
    ];

    shoppers.forEach(function (shopper){
        let discountedAmount = shopper.amount
        let discount;
        if (shopper.amount < 200){
            discount = 12;
            discountedAmount = .88 * shopper.amount;
        }
        console.log(`\nShopper: ${shopper.name}\nAmount Spent: $${shopper.amount}\nDiscount: ${discount}%\nFinal Total: $${discountedAmount}`)
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: 'Dune',
            author: {
                firstName: 'Frank',
                lastName: 'Herbert'
            }
        },
        {
            title: 'I, Claudius',
            author: {
                firstName: 'Robert',
                lastName: 'Frost'
            }
        },
        {
            title: 'To Kill a Mockingbird',
            author: {
                firstName: 'Harper',
                lastName: 'Lee'
            }
        },
        {
            title: 'The Eaters of the Dead',
            author: {
                firstName: 'Michael',
                lastName: 'Crichton'
            }
        },
        {
            title: 'said the Tick-Tock Man',
            author: {
                firstName: 'Harlan',
                lastName: 'Ellison'
            }
        },
    ]
    {
        let(index){
        function index(number){
        books.forEach(function (book, index){
            console.log('Book # ' + (index + 1))
            console.log('Title ' * books.title)
            console.log('Author ' + book.author.firstName + ' ' + book.author.lastName)
            console.log('---')
        })
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

})