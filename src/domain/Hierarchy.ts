import { IAnimal } from "./Animal";

export class Hierarchy {
  findByName(name: string, item: IAnimal): IAnimal | null {
    if (this.normalizeWord(item.name) === this.normalizeWord(name)) return item;

    for (const child of item.children) {
      const result = this.findByName(name, child);
      if (result) return result;
    }

    return null;
  }

  normalizeWord(word: string) {
    return word
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
}
