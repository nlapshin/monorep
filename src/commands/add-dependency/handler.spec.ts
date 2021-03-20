import { expect } from 'chai';

import fs from 'fs';
import tempy from 'tempy';
import fixtures from './__fixtures';

import { addPackageHandler } from './index';

describe('add-package-handler', () => {
  it('should install dependency for package(s)', () => {
    const tempPackageJson = tempy.file();

    fs.writeFileSync(tempPackageJson, JSON.stringify(fixtures.packageJson, null, 4));

    expect(addPackageHandler(tempPackageJson)).to.deep.equal(fixtures.packageJson);
  });
});