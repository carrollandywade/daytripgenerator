"use strict";

// Day Trip Generator

let destinations = ['Beach', 'Museum', 'Park', 'Fishing'];
let restaurants = ['McDonalds', 'Chick-fil-A', 'Taco Bell', 'Caffeteria'];
let modeOfTransportation = ['Bus', 'Bicycle', 'Rental Car', 'Taxi'];
let entertainment = ['Swimming', 'Theater', 'Shopping', 'Dancing'];

let dayTripActivities = [];
let itenerary = [];

// this creates array dayTripActivities
dayTripActivities.push(destinations);
dayTripActivities.push(restaurants);
dayTripActivities.push(modeOfTransportation);
dayTripActivities.push(entertainment);
// console.log(dayTripActivities);

// this creates random selections from arrays
function randomDecisionMaker(decision) {
let randomGenerator = Math.random() * decision.length;
randomGenerator = Math.floor(randomGenerator);
return decision[randomGenerator];
}

// this creates array itenerary
for(let i =0; i < dayTripActivities.length; i++) {
    itenerary.push(randomDecisionMaker(dayTripActivities[i]));
}
    // console.log(itenerary);

// this gives user userConfirmation of individual activities
function userConfirmation(pendingApproval) {
let i = pendingApproval
let selection = itenerary[i]
    let userInput = prompt("do you approve of " + (selection) + " as your selection?");
if(userInput !== "yes") {
    itenerary[i] = (randomDecisionMaker(dayTripActivities[i]));
    userConfirmation(i) +1;
    }
if(userInput === "yes") {
    alert("Confirmation! you have choosen " + (selection) + " as your final selection")
    }
}

// this calls for userConfirmation function
for(let i =0; i < itenerary.length; i++) {
    let result = i;
    userConfirmation(i);
    }

console.log(itenerary);