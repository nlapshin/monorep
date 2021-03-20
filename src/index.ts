import fs from 'fs';

import { Command } from 'commander';
import { PackageJson } from 'type-fest'

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

function packageJson(): PackageJson {
  return JSON.parse(fs.readFileSync('package.json', 'utf-8'))
}


