import { FileLoader } from "../src/infra/FileLoader";

describe("FileLoader", () => {
  test("loadJsonFile should return mocked JSON data", () => {
    const fileLoader = new FileLoader();
    const data = fileLoader.loadJsonFile();

    expect(data).toBeDefined();
    expect(data.name).toBe("Animais");
  });
});
