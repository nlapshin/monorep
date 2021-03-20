import fs from 'fs';
import path from 'path';
import { PackageJson } from 'type-fest';

import { IPackageInfo } from './model';

export function packageJson(packageJsonPath = 'package.json'): PackageJson {
  return JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
}

export function packageInfo(packageJsonPath = 'package.json'): IPackageInfo {
  const pjson = packageJson(packageJsonPath);

  return {
    name: pjson.name,
    version: pjson.version,
    package: pjson,
    packagePath: path.dirname(packageJsonPath)
  }
}
