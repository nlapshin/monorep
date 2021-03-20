import { Command } from 'commander';

import pjson from '../package.json';

import {
  registerAddPackageCommand
} from './commands';

(() => {
  const program = new Command();

  program.version(pjson.version);

  registerAddPackageCommand(program);

  program.parse(process.argv);
})();

