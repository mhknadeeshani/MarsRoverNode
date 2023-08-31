import * as fs from "fs";
import { logger } from "../logger";

export function readFile(filePath: string) {
  let input = "";
  try {
    input = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    logger.error("Invalid input file");
    throw new Error("Invalid file path");
  }
  return input;
}
