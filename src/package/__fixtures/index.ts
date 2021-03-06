export default {
  packageJson: {
    "name": "monorep",
    "version": "1.0.0",
    "description": "Simple monorepository assistant",
    "main": "index.js",
    "scripts": {
      "test": "npx mocha ./src/**/*.spec.ts",
      "lint": "npx eslint . --ext .ts",
      "prepare": "husky install"
    },
    "husky": {
      "pre-commit": "npm run pre-commit"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/nlapshin/monorep.git"
    },
    "author": "Nikolay Lapshin <nlapshin1989@gmail.com>",
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/nlapshin/monorep/issues"
    },
    "homepage": "https://github.com/nlapshin/monorep#readme",
    "devDependencies": {
      "@types/chai": "^4.2.15",
      "@types/mocha": "^8.2.2",
      "@types/node": "^14.14.35",
      "@typescript-eslint/eslint-plugin": "^4.18.0",
      "@typescript-eslint/parser": "^4.18.0",
      "chai": "^4.3.4",
      "eslint": "^7.22.0",
      "husky": "^5.1.3",
      "mocha": "^8.3.2",
      "ts-node": "^9.1.1",
      "typescript": "^4.2.3"
    },
    "dependencies": {
      "commander": "^7.1.0",
      "type-fest": "^0.8.1"
    }
  },
  packageJsonEmpty: {
    "name": "test-package",
    "version": "1.0.0",
    "description": "Test package",
    "main": "index.js",
    "private": true,
    "scripts": {},
    "devDependencies": {},
    "dependencies": {}
  }
}