import { IAnimal } from "../domain/Animal";
import { Hierarchy } from "../domain/Hierarchy";
import { FileLoader } from "../infrastructure/FileLoader";

interface ICountOccurrences {
  [key: string]: {
    count: number;
    name: string;
  };
}

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
    const existWords = words
      .map((word) => {
        const result = this.hierarchy.findByName(word, this.data);
        if (result) return result.name;
      })
      .filter((name): name is string => name !== undefined);

    return existWords;
  }

  countOccurrences(categories: string[]): string {
    const occurrences = categories.reduce((acc, category) => {
      const normalizedCategory = this.hierarchy.normalizeWord(category);
      if (acc[normalizedCategory]) {
        acc[normalizedCategory].count++;
      } else {
        acc[normalizedCategory] = {
          name: category,
          count: 1,
        };
      }
      return acc;
    }, {} as ICountOccurrences);

    return this.formatOccurrences(occurrences);
  }

  formatOccurrences(occurrences: ICountOccurrences): string {
    return Object.values(occurrences)
      .map(({ name, count }) => `${name} = ${count}`)
      .join("; ");
  }
}
