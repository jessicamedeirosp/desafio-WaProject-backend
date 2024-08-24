import { CommandLine } from "../src/application/CommandLine";

jest.mock("yargs/helpers", () => ({
  hideBin: jest.fn().mockImplementation((args) => args),
}));

jest.mock("yargs", () => {
  const mockYargs = {
    command: jest.fn().mockReturnThis(),
    help: jest.fn().mockReturnThis(),
    parseSync: jest.fn().mockReturnValue({
      depth: 2,
      verbose: true,
      phrase: "Eu amo papagaios",
    }),
  };
  return jest.fn(() => mockYargs);
});

describe("CommandLine", () => {
  let commandLine: CommandLine;

  beforeEach(() => {
    commandLine = new CommandLine();
  });

  test("getDepth returns correct depth", () => {
    expect(commandLine.getDepth()).toBe(2);
  });

  test("isVerbose returns correct verbose flag", () => {
    expect(commandLine.isVerbose()).toBe(true);
  });

  test("getPhrase returns correct phrase", () => {
    expect(commandLine.getPhrase()).toBe("Eu amo papagaios");
  });
});
