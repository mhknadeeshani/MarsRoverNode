import { Coordinates } from "../../src/model/Coordinates"
import * as fs from 'fs';
import { processBorderCoordinates } from "../../src/service/InputProcessService";
import {jest} from '@jest/globals'
import { RoverMovement } from "../../src/model/RoverMovement";
import { Position } from "../../src/model/Position";
import {processRoverMovements} from "../../src/service/RoverMovementService";



describe('',() => {
    const dummyInputPosition: Position = new Position(new Coordinates(3, 3), "E");
    const roverMovement: RoverMovement = new RoverMovement(dummyInputPosition, "MMRMMRMRRM", "");;
    const roverMovements: Map<number, RoverMovement> = new Map<number, RoverMovement>([[2, roverMovement]]);
    const coordinates: Coordinates = new Coordinates(5, 5);;
    let finalPosition: Position;
    const expectedDummyPosition: Position = new Position(new Coordinates(5, 1), "E");

    describe('Test final position',() => {

        finalPosition = processRoverMovements(roverMovements!,coordinates!)!;    
        it('should work',() => {
            
            expect(finalPosition.coordinates.x).toBe(expectedDummyPosition.coordinates.x);
            expect(finalPosition.coordinates.y).toBe(expectedDummyPosition.coordinates.y);
            })
    });


})
