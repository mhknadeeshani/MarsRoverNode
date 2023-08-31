
import { Coordinates } from '../model/Coordinates';
import { RoverMovement } from '../model/RoverMovement';
import { Position } from '../model/Position';
import { logger } from '../logger';



    
    let coordinates = new Array() as Array<string>;
    let inputData = new Array() as Array<string>;
    let roverMap =  new Map<number,RoverMovement>();

    export function processBorderCoordinates(input: string) {
      
    if(input == null || input ==undefined){
        throw new InvalidInputException('Input is invalid')
    }
      coordinates = input.split("\n")[0].split(" ");
      const x = parseInt(coordinates[0]);
      const y = parseInt(coordinates[1]);
      const borderCoordinates = new Coordinates(x, y);
      return borderCoordinates;
    }

    export function generateRoverPositions(input: string) {
      inputData = input.split("\n");
      //start from second input line
      for (let i = 1; i < inputData.length; i++) {
        try {
          if (i % 2 == 1) {
            let values: string[] = [];
            //values will have array of space separated values in each line
            values = inputData[i].split(" ");
            const initialCoordinates = new Coordinates(
              parseInt(values[0]),
              parseInt(values[1])
            );
            const initialDirection = values[2];
            const position = new Position(initialCoordinates, initialDirection);
            const roverMovement = new RoverMovement(position, "", "");
            roverMap.set(i + 1, roverMovement);
          } else {
            if (roverMap.has(i)) {
              const movements = inputData[i];
              let roverMovement: RoverMovement = roverMap.get(i)!;
              roverMovement.movements = movements;
              roverMap.set(i, roverMovement);
            }
          }
        } catch (error) {
          logger.error(error);
        }
      }
      return roverMap;
    }



