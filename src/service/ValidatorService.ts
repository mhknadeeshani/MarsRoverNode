import { Coordinates } from "../model/Coordinates";

export function isValidCoordinate(coordinates: Coordinates,borderCoordinates: Coordinates ){
    let isValid : boolean  = true;
    if(coordinates.x < 0 || coordinates.y < 0 
    || coordinates.x > borderCoordinates.x || coordinates.y > borderCoordinates.y){
        isValid = false;
    }
return isValid;

}