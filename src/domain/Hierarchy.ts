import { IAnimal } from "./Animal";

export class Hierarchy {
  findByName(name: string, item: IAnimal): IAnimal | null {
    if (item.name === name) return item;

    for (const child of item.children) {
      const result = this.findByName(name, child);
      if (result) 
        return result;
    }

    return null;
  }
}