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
let userTripArray = [];

let userDestination = randomSelect(destinations);
let userResteraunts = randomSelect(resteraunts);
let userTransportaion = randomSelect(transportation);
let userEntertainment = randomSelect(entertainment);  

userTripArray[0] = userDestination;
userTripArray[1] = userResteraunts;
userTripArray[2] = userTransportaion;
userTripArray[3] = userEntertainment;

console.log(`Your destinations is ${userDestination}, and your transportation is ${userTransportaion}.`);

//prompting user for reselect
let userSelect = prompt("Would you like to change your trip?");
if(userSelect == "Yes"){
    reSelectDestination(userTripArray);
    displayTrip(userTripArray);
    console.log("Your trip has been changed.");
} else{
    console.log("Your trip has been confirmed!");
}


//let reselect;
// while(reselect = true){
//     let userPrompt = prompt("Would you like to change anything in your trip?");
//     if(userPrompt = "Yes"){
//         console.log("Your trip has changed.");
//     }else{
//         break;
//     }
// }

//reselecting options method
function reSelectDestination(array){
    array[0] = randomSelect(destinations);
    return array;
}

function displayTrip(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}