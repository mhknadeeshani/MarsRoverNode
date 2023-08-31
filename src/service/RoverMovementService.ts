import { Coordinates } from "../model/Coordinates";
import { Position } from "../model/Position";
import { RoverMovement } from "../model/RoverMovement";
import { directionRules } from "../repository/Rules";
import { Direction } from "../util/Direction";
import Constant from "../util/Constant";
import { isValidCoordinate } from "./ValidatorService";
import { logger } from "../logger";

function printFinalPositions(position: Position){
    const output = JSON.stringify(position)
    logger.info(output);
    console.log(JSON.stringify(position.coordinates.x+ ' '+position.coordinates.y+' '+ position.direction))
}


export function processRoverMovements( roverInitialPositions: Map<number, RoverMovement>, borderCoordinates: Coordinates):Position {
    let position: Position = new Position(new Coordinates(0,0),"");
    if(roverInitialPositions){
    roverInitialPositions.forEach((roverMovement: RoverMovement, key: number) => {
        
        if(isValidCoordinate(roverMovement.position.coordinates,borderCoordinates)){
            position = getFinalPosition(roverMovement.position,roverMovement.movements);
            printFinalPositions(position)
            
        }else{
            logger.error('Rover coordinates are invalid');
    }    
  });
}
return position;
};

function getFinalPosition(initialPosition: Position,movements: string) {
    const moves = movements.split('');
    let currentDirection = initialPosition.direction;
    let currentCoordinates = initialPosition.coordinates;
    if(moves){
    for(let i = 0; i< moves.length ; i++){
        let move = moves[i] ;
        if(Constant.LEFT == move || Constant.RIGHT == move){
            currentDirection = getUpdatedDirection(currentDirection, move)!;
        }else if (Constant.MOVE == moves[i]){
            currentCoordinates = getUpdatedCoordinates(currentCoordinates, currentDirection);
        }
    }
}
    return new Position(currentCoordinates, currentDirection);
};

function getUpdatedDirection(currentDirection: string, move: String) {
    return directionRules.get(currentDirection+move);
}

function getUpdatedCoordinates(currentCoordinates: Coordinates, currentDirection: string) {
    let x = currentCoordinates.x;
    let y = currentCoordinates.y;

    switch(currentDirection){
        case Direction.North :
            ++y;
            break;
        case Direction.South:
            --y;
            break;
        case Direction.East :
            ++x;
            break;
        case Direction.West :
            --x;
            break;
    }

    return new Coordinates(x,y);
}


