import { IAnimal } from "./Animal";

export class Hierarchy {
  findByName(word: string, data: IAnimal, depth: number | null): string {
    const result: string[] = [];

    const search = (item: IAnimal, word: string): boolean => {
      if (!item) return false;

      result.push(item.name);

      if (this.normalizeWord(item.name) === this.normalizeWord(word))
        return true;

      if (item.children) {
        for (const child of item.children) {
          if (search(child, word)) return true;
        }
      }

      result.pop();
      return false;
    };

    search(data, word);

    if (depth === null) {
      return result[result.length - 1];
    }

    return result[depth];
  }

  normalizeWord(word: string) {
    return word
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }
}
