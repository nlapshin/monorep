import { Command } from 'commander';

import pjson from '../package.json';

(() => {
  const program = new Command();

  program.version(pjson.version);

  program.parse(process.argv);
})();

