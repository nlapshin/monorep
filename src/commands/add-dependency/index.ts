import commander from "commander";

import { registerScopeOption } from '../../options';
import { addPackageHandler } from './handler';

export function registerAddDependencyCommand (program: commander.Command): commander.Command {
  const command = program
    .command('add [dependency]')
    .description('add dependency to target package(s)')

  registerScopeOption(command);

  command.action(addPackageHandler);

  return program;
}
