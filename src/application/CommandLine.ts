import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";

interface IArguments {
  depth: number | null;
  verbose: boolean;
  phrase: string;
}

export class CommandLine {
  private args: Arguments<IArguments>;

  constructor() {
    this.args = yargs(hideBin(process.argv))
      .command("analyze", "Analyze a phrase", {
        depth: {
          description: "The depth of the hierarchy to display",
          alias: "d",
          type: "number",
          default: null,
          demandOption: true,
        },
        verbose: {
          description: "Display additional metrics",
          alias: "v",
          type: "boolean",
          default: false,
        },
        phrase: {
          description: "The phrase to analyze",
          alias: "p",
          type: "string",
          demandOption: false,
        },
      })
      .help()
      .parseSync() as Arguments<IArguments>;
  }

  public getDepth(): number | null {
    return this.args.depth;
  }

  public isVerbose(): boolean {
    return this.args.verbose;
  }

  public getPhrase(): string {
    return this.args.phrase;
  }
}
