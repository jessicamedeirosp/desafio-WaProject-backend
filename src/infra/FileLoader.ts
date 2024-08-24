import * as fs from "fs";
import { IAnimal } from "../domain/Animal";

export class FileLoader {
  loadJsonFile(filePath: string = "./src/dicts/animal.json"): IAnimal {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data) as IAnimal;
  }
}
