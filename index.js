// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    someValue = someValue - 42
    return Math.abs(someValue)
}

function distanceFromHqInFeet(destination){
    const traveledInFeet = distanceFromHqInBlocks(destination) * 264
    return traveledInFeet
}

function distanceTravelledInFeet(start, destination){
    const traveledInFeet = Math.abs(start - destination) * 264
    return traveledInFeet
}

function calculatesFarePrice(start, destination){
    const traveledInFeet = distanceTravelledInFeet(start, destination)
    if(traveledInFeet <= 400){
        return 0
    } else if(traveledInFeet > 400 && traveledInFeet <= 2000){
        return (traveledInFeet - 400) * .02
    } else if(traveledInFeet > 2000 && traveledInFeet <= 2500){
        return 25
    } else if(traveledInFeet > 2500){
        return "cannot travel that far"
    }

}