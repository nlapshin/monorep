export default {
  mainPackageJson: {
    "name": "main-package",
    "version": "1.0.0",
    "description": "Test package",
    "main": "index.js",
    "private": true,
    "scripts": {},
    "devDependencies": {},
    "dependencies": {}
  },
  monorepConfig: {
    packages: [ './src/package1/*', './src/package2/*' ]
  }
}