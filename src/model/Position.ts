import { Coordinates } from "./Coordinates";

export class Position {
    coordinates = new Coordinates(0,0);
    direction = "";

    constructor(coordinates: Coordinates, direction : string ){
        this.coordinates = coordinates,
        this.direction = direction;
    }
}