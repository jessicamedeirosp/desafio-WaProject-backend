import { Hierarchy } from "../src/domain/Hierarchy";
import { IAnimal } from "../src/domain/Animal";

describe("Hierarchy", () => {
  let hierarchy: Hierarchy;
  let data: IAnimal;

  beforeEach(() => {
    hierarchy = new Hierarchy();
    data = {
      name: "Animais",
      children: [
        {
          name: "Mamíferos",
          children: [
            {
              name: "Carnívoros",
              children: [
                {
                  name: "Felinos",
                  children: [
                    { name: "Leões", children: [] },
                    { name: "Tigres", children: [] },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Aves",
          children: [
            {
              name: "Pássaros",
              children: [{ name: "Papagaios", children: [] }],
            },
          ],
        },
      ],
    };
  });

  test("findByName returns correct path at depth", () => {
    const result = hierarchy.findByName("Papagaios", data, 2);
    expect(result).toBe("Pássaros");
  });

  test("normalizeWord normalizes words correctly", () => {
    expect(hierarchy.normalizeWord("Papagaios")).toBe("papagaios");
    expect(hierarchy.normalizeWord("Pássaros")).toBe("passaros");
  });
});
