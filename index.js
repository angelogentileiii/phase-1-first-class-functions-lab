// Code your solution in this file!


const driverArray = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(array){
return array.slice(0,2)
}

returnFirstTwoDrivers(driverArray) //=

const returnLastTwoDrivers = function(array){
return array.slice(2)
}

returnLastTwoDrivers(driverArray) //=

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] //=

function createFareMultiplier (fare) {
    const fareMultiplier = function() {
       return fare * fare
    }
    return fareMultiplier;
}

createFareMultiplier(4) //=

function fareDoubler(fare) {
    const doubledFare = fare * 2;
    return doubledFare;
}

function fareTripler(fare) {
    const tripleFare = fare * 3;
    return tripleFare;
}

function selectDifferentDrivers(arrayOfDrivers, functionItem ) {
    return functionItem(arrayOfDrivers)
}