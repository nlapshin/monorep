import { expect } from 'chai';

import fs from 'fs';
import path from 'path';
import tempy from 'tempy';
import fixtures from './__fixtures';

describe('add-package-handler', () => {
  it('should install dependency for package(s)', () => {
    const tempDirectory = tempy.directory();
    const tempPackageJSON = path.resolve(tempDirectory, 'package.json');
    const tempMonorep = path.resolve(tempDirectory, '.monorep');

    fs.writeFileSync(tempPackageJSON, JSON.stringify(fixtures.mainPackageJson, null, 4));
    fs.writeFileSync(tempMonorep, JSON.stringify(fixtures.monorepConfig, null, 4));

    // tempDirectory
    // console.log(process.cwd());

    // addDependencyHandler('hello-world', { scope: 'test' });
  });
});