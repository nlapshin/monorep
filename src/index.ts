import { Command } from 'commander';

import { packageJson } from './package';

import {
  registerAddDependencyCommand
} from './commands';

(() => {
  const pjson = packageJson();
  const program = new Command();

  program.version(pjson.version || '1.0.0');

  registerAddDependencyCommand(program);

  program.parse(process.argv);
})();