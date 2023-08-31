import express from "express";
import config from "config";
import { logger } from "./logger";

import { generateRoverPositions, processBorderCoordinates } from "./service/InputProcessService";
import { Coordinates } from "./model/Coordinates";
import { RoverMovement } from "./model/RoverMovement";
import { Position } from "./model/Position";
import { processRoverMovements } from "./service/RoverMovementService";
import { readFile } from "./service/FileReaderService";


const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();
app.use(express.urlencoded({ extended: false}));

app.use(express.json());
app.listen(port, host, () => {
    logger.info(`Server listing at http://${host}:${port}`);
    try{
        const input = readFile('resources/input.txt');
        const borderCoordinates : Coordinates = processBorderCoordinates(input)!;
        const roverInitialPositions : Map<number, RoverMovement> = generateRoverPositions(input);
        processRoverMovements(roverInitialPositions, borderCoordinates);
    }catch(error){
        logger.error(`Error occurred ${error}`);
    }
})


