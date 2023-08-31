import { readFile } from "../../src/service/FileReaderService";

describe("FileReader service test", () => {
  it("should work", () => {
    expect(() => {readFile("dummy.txt");}).toThrow("Invalid file path");
  });
});
