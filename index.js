// Code your solution in this file!
var headQaurters=42
function distanceFromHqInBlocks(pickUpLocation,){
var feetForDestination=pickUpLocation-headQaurters
return Math.abs(feetForDestination)
}
function distanceFromHqInFeet(pickUpLocation){
    var distanceInFeet=distanceFromHqInBlocks(pickUpLocation)*264;
    return distanceInFeet
}
function distanceTravelledInFeet(start,destination){
var travelInFeet=(start-destination)*264;
return Math.abs(travelInFeet)
}

function calculatesFarePrice(start, destination){
var customerInFeet=distanceTravelledInFeet(start,destination)
if(customerInFeet<=400){
    return 0
}else if(customerInFeet>400 && customerInFeet<=2000){
    return (customerInFeet-400)*2/100
    }
    else if(customerInFeet>2000 && customerInFeet<2500){
return 25
    }
    else if(customerInFeet>2500){
        return "cannot travel that far"
    }
}