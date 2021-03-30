import fs from 'fs';
import { IConfig } from './model';

import path from 'path';

export function config(configPath = '.monorep'): IConfig {
  const configPathFull = path.resolve(configPath);

  if (fs.existsSync(configPathFull) === false) {
    throw new Error('Config file not exists');
  }

  const config = JSON.parse(fs.readFileSync(configPathFull, 'utf-8')) as IConfig;

  return config;
}