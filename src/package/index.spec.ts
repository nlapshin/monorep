import { expect } from 'chai';

import fs from 'fs';
import tempy from 'tempy';
import packageJsonParser from 'package-json-parser';
import fixtures from './__fixtures';

import { packageJson, packageInfo, installDependency } from './index';

describe('package', () => {
  describe('packageJson', () => {
    it('should read and parse package.json file by path', () => {
      const tempPackageJson = tempy.file();

      fs.writeFileSync(tempPackageJson, JSON.stringify(fixtures.packageJson, null, 4));

      expect(packageJson(tempPackageJson)).to.deep.equal(fixtures.packageJson);
    });
  });

  describe('packageInfo', () => {
    it('should return package.json data with package information', () => {
      const tempPackageJson = tempy.file();

      fs.writeFileSync(tempPackageJson, JSON.stringify(fixtures.packageJson, null, 4));

      expect(packageInfo(tempPackageJson)).to.deep.equal({
        name: fixtures.packageJson.name,
        version: fixtures.packageJson.version,
        package: fixtures.packageJson,
        packagePath: '/tmp'
      });
    });
  });

  describe('installDependency', () => {
    it('should install dependency for target package', async () => {
      const tempPackageDir = tempy.directory();
      const tempPackageJson = `${tempPackageDir}/package.json`;

      fs.writeFileSync(tempPackageJson, JSON.stringify(fixtures.packageJsonEmpty, null, 4));
      const info = packageInfo(tempPackageJson);

      await installDependency(info.packagePath, 'package-json-parser@1.1.0');

      const finalInfo = packageJsonParser.json(tempPackageJson);
      const deps = finalInfo.dependencies || {};

      expect(deps['package-json-parser']).to.equal('^1.1.0');

    }).timeout(10000).slow(2000);
  });
});