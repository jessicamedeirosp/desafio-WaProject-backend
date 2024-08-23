import { Analyzer } from "./application/Analyzer";
import { CommandLine } from "./application/CommandLine";

async function bootstrap() {
  const startTimeParams = process.hrtime();
  const analyzer = new Analyzer();
  const commandLine = new CommandLine();
  // const  depth = cliParser.getDepth();
  const verbose = commandLine.isVerbose();
  const phrase = commandLine.getPhrase();

  const endTimeParams = process.hrtime(startTimeParams);
  const timeTakenParams = endTimeParams[0] * 1000 + endTimeParams[1] / 1000000;

  if (!phrase) {
    console.log("Adicione uma frase");
    return;
  }

  const startTimeAnalysis = process.hrtime();

  const result = analyzer.analyzePhrase(phrase);
  console.log(result);

  const endTimeAnalysis = process.hrtime(startTimeAnalysis);
  const timeTakenAnalysis =
    endTimeAnalysis[0] * 1000 + endTimeAnalysis[1] / 1000000;

  if (verbose) {
    console.log(
      `Tempo de carregamento dos parâmetros: ${timeTakenParams.toFixed(3)} ms`,
    );
    console.log(
      `Tempo de verificação da frase: ${timeTakenAnalysis.toFixed(3)} ms`,
    );
  }
}

bootstrap();
