import * as fs from 'fs';
import { IAnimal } from '../domain/Animal';

export class FileLoader {
  protected loadJsonFile(filePath: string = './src/db/animal.json'): IAnimal {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as IAnimal;
  }
}