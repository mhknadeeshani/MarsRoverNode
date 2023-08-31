import { Coordinates } from "../../src/model/Coordinates";
import { processBorderCoordinates } from "../../src/service/InputProcessService";

describe('Test border coordinates', () =>{
    const coordinates: Coordinates = new Coordinates(5,5);
    let borderCoordinates: Coordinates; 
    const input: string ='5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';

    describe('compare border coordinates', () =>{
        borderCoordinates = processBorderCoordinates(input)
        it('should work',() => {
        expect(borderCoordinates.x).toBe(coordinates.x);
        expect(borderCoordinates.y).toBe(coordinates.y);
        })
    })
})
