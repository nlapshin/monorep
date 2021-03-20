import fs from 'fs';
import { PackageJson } from 'type-fest';

export function packageJson(packageJsonPath = 'package.json'): PackageJson {
  return JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
}
