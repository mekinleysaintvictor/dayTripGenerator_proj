"use strict"
let destinations = ["California", "Italy", "Africa"];
let resteraunts = ["In & Out", "Red Robin", "Panera Bread"];
let transportation = ["Car", "Plane", "Boat"];
let entertainment = ["Opera", "Hike", "Movie"];

//function for picking randomly
function randomSelect(array){
    let choice = array[Math.floor(Math.random() * array.length)]; 
    return choice;
}

let testingFunction = randomSelect(destinations);
console.log(testingFunction);

//selecting each place and store in some way
//generating the trip first

let userDestination = randomSelect(destinations);
let userResteraunts = randomSelect(resteraunts);
let userTransportaion = randomSelect(transportation);
let userEntertainment = randomSelect(entertainment);            

console.log(`Your destinations is ${userDestination}, and your means of transportation is ${userTransporation}.`);