import commander from "commander";

export function registerScopeOption (program: commander.Command): commander.Command {
  program
    .option('-s, --scope <packages>', 'Target package(s)', '');

  return program;
}

export function parseScopeOption (scope?: string): string[] {
  return scope ? scope.split(',') : [];
}