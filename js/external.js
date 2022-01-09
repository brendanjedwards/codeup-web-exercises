"use strict";

console.log ("Hello from external script!");

//alert('Welcome to my Website!')

//alert('Check out this alert!')

let littleMeraid = 3
let brotherBeer = 5
let hercules = 1
let totalDays= littleMeraid + brotherBeer + hercules
let price = totalDays * 3
console.log (price)

let googleHourly = 400
let amazonHourly = 380
let facebookHourly =350
let totalGoogle = 400 * 6
let totalAmazon = 380 * 4
let totalFacebook = 350 * 10
let finalTotal= totalGoogle + totalAmazon + totalFacebook
let pay = finalTotal
console.log (pay)

let classIsFull = false
let doesNotConflict = true
if(classIsFull || !doesNotConflict) {
    console.log ("denied")}
else {console.log ("accepted")}

let numberOfItems = 1
let hasNotExpired = false
let premiumMembership = true
if (numberOfItems >= 2 && hasNotExpired || premiumMembership) {
    console.log ("offerApplies")}
else {console.log ("offerNotApplies")}