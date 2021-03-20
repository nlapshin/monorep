import { Command } from 'commander';

import { packageJson } from './package';

import {
  registerAddPackageCommand
} from './commands';

(() => {
  const pjson = packageJson();
  const program = new Command();

  program.version(pjson.version || '1.0.0');

  registerAddPackageCommand(program);

  program.parse(process.argv);
})();