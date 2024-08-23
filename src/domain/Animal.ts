interface IAnimal {
  name: string,
  children: IAnimal[]
}

class Animal {
  name: string;
  children: IAnimal[];

  constructor(name: string, children: IAnimal[]) {
    this.name = name;
    this.children = children;
  }

  create(child: IAnimal) {
    this.children.push(child);
  }
}