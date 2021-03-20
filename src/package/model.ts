import { PackageJson } from 'type-fest';

export interface IPackageInfo {
  name?: string;
  version?: string;
  package: PackageJson;
  packagePath: string;
}