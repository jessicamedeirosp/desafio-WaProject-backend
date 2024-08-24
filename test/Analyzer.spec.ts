import { Analyzer } from "../src/application/Analyzer";
import * as fs from "fs";
import { IAnimal } from "../src/domain/Animal";

jest.mock("fs");

describe("Analyzer", () => {
  let analyzer: Analyzer;
  let mockData: IAnimal;

  beforeEach(() => {
    mockData = {
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

    (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify(mockData));
    analyzer = new Analyzer();
  });

  test("analyzePhrase returns correct hierarchy at depth", () => {
    const result = analyzer.analyzePhrase("Eu amo papagaios", 2);
    expect(result).toEqual(["Pássaros"]);
  });

  test("countOccurrences counts occurrences correctly", () => {
    const categories = ["Aves", "Aves", "Mamíferos"];
    const result = analyzer.countOccurrences(categories);

    expect(result).toBe("Aves = 2; Mamíferos = 1");
  });
});
