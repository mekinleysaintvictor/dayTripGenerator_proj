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

