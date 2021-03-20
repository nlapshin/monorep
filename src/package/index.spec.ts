import { expect } from 'chai';

import fs from 'fs';
import tempy from 'tempy';
import fixtures from './__fixtures';

import { packageJson } from './index';

describe('package', () => {
  describe('packageJson', () => {
    it('should read and parse package.json file by path', () => {
      const tempPackageJson = tempy.file();

      fs.writeFileSync(tempPackageJson, JSON.stringify(fixtures.packageJson, null, 4));

      expect(packageJson(tempPackageJson)).to.deep.equal(fixtures.packageJson);
    });
  });
});