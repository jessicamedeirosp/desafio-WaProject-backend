import { Analyzer } from "./application/Analyzer";
import { CommandLine } from "./application/CommandLine";

async function bootstrap() {
  const analyzer = new Analyzer();
  const commandLine = new CommandLine();
  // const  depth = cliParser.getDepth();
  const verbose = commandLine.isVerbose();
  const phrase = commandLine.getPhrase();

  if (!phrase) {
    console.log("Adicione uma frase");
    return;
  }

  const result = analyzer.analyzePhrase(phrase);
  console.log(result);

  if (verbose) {
    console.log("carregamento dos parametros");
    console.log("Tempo de verificacao da frase");
  }
}

bootstrap();
