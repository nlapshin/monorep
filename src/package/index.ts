import fs from 'fs';
import path from 'path';
import { PackageJson } from 'type-fest';
import execSh from 'exec-sh';

import { IPackageInfo } from './model';

const packageManager = {
  npm: {
    install: 'npm install',
    uninstall: 'npm uninstall',
  }
}

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

export async function installDependency(packagePath: string, dependency: string): Promise<void> {
  await execSh.promise(`cd ${packagePath} && ls -l && ${packageManager.npm.install} ${dependency}`);
}

export async function uninstallDependency(packagePath: string, dependency: string): Promise<void> {
  await execSh.promise(`cd ${packagePath} && ls -l && ${packageManager.npm.uninstall} ${dependency}`);
}
