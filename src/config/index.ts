import fs from 'fs';
import { IConfig } from './model';

export function config(configPath = '.monorep'): IConfig {
  if (fs.existsSync(configPath) === false) {
    throw new Error('Config file not exists');
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8')) as IConfig;

  return config;
}