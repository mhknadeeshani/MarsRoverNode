import { Coordinates } from "./Coordinates";
import { Position } from "./Position";

export class RoverMovement {
    initialCoordinates = new Coordinates(0,0);
    position = new Position(this.initialCoordinates,"");
    movements = "";
    movementStatus = "";

    constructor(position: Position, movements : string, movementStatus : string){
        this.position = position,
        this.movements = movements;
        this.movementStatus = movementStatus
    }

}