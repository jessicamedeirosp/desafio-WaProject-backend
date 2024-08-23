import { IAnimal } from "../domain/Animal";
import { Hierarchy } from "../domain/Hierarchy";
import { FileLoader } from "../infrastructure/FileLoader";

export class Analyzer extends FileLoader {
  private hierarchy: Hierarchy;
  private data: IAnimal;
  constructor() {
    super();
    this.data = this.loadJsonFile();
    this.hierarchy = new Hierarchy();
  }

  analyzePhrase(phrase: string) {
    const words = phrase.split(" ");

    const existWords = words.filter((word) => {
      const result = this.hierarchy.findByName(word, this.data);
      if (result) return result;
    });

    return existWords;
  }
}
