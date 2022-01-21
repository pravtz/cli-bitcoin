const { expect } = require('chai');
const { describe, it } = require('mocha');
const { exec } = require('child_process');
const pkg = require('../../package.json');

const converterBtc = './src/main.js';

describe('Main - Tests Integrations', () => {
  it('should retorn the version when comander converterBtc --version', (done) => {
    exec(`${converterBtc} --version`, (err, stdout) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal('1.0.0');
      done();
    });
  });

  it('should retorn the description when comander converterBtc --help', (done) => {
    exec(`${converterBtc} --help`, (err, stdout) => {
      if (err) throw err;

      expect(stdout.includes(pkg.description)).to.be.true;

      done();
    });
  });
});
