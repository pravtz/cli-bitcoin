const { expect } = require('chai');
const { describe, it } = require('mocha');
const { exec } = require('child_process');
const pkg = require('../../package.json');

const cliBitcoin = './src/main.js';

describe('Main - Tests Integrations', () => {
  context('Default', () => {
    it('should retorn the version when comander cli-bitcoin --version', (done) => {
      exec(`${cliBitcoin} --version`, (err, stdout) => {
        if (err) throw err;
        expect(stdout.replace('\n', '')).to.be.equal('1.0.0');
        done();
      });
    });

    it('should retorn the description when comander cli-bitcoin --help', (done) => {
      exec(`${cliBitcoin} --help`, (err, stdout) => {
        if (err) throw err;

        expect(stdout.includes(pkg.description)).to.be.true;

        done();
      });
    });
  });
  context('Command Ticker', () => {
    it('should retorn the helper of the ticker when comander cli-bitcoin ticker --help', (done) => {
      exec(`${cliBitcoin} ticker --help`, (err, stdout) => {
        if (err) throw err;
        const expected = 'Retorna informações com o resumo das últimas 24 horas de negociações.';
        const expected2 = '$ cli-bitcoin ticker';
        expect(stdout.includes(expected)).to.be.true;
        expect(stdout.includes(expected2)).to.be.true;

        done();
      });
    });
    it.skip('should retorn data tinker when commander cli-bitcoin tinker -c btc', (done) => {
      exec(`${cliBitcoin} ticker`, (err, stdout) => {
        if (err) throw err;
        const expected = 'high';
        const stringStdout = JSON.stringify(stdout);
        expect(stringStdout.includes(expected)).to.be.true;
        done();
      });
    });
  });
  context('Command Orderbook', () => {
    it.skip('should retorn data tinker when commander cli-bitcoin orderbook', (done) => {
      exec(`${cliBitcoin} orderbook`, (err, stdout) => {
        const expected = '';
        if (err) throw err;
        const stringStdout = JSON.stringify(stdout);
        expect(stringStdout.includes(expected)).to.be.true;
        done();
      });
    });
  });
  context('Command Trader', () => {
    it.skip('should retorn data tinker when commander cli-bitcoin trader', (done) => {
      exec(`${cliBitcoin} trader`, (err, stdout) => {
        const expected = '';
        if (err) throw err;
        const stringStdout = JSON.stringify(stdout);
        expect(stringStdout.includes(expected)).to.be.true;
        done();
      });
    });
  });
  context('Command daySummary', () => {
    it.skip('should retorn data tinker when commander cli-bitcoin daySummary 07 11 2020', (done) => {
      exec(`${cliBitcoin} daySummary 07 11 2020`, (err, stdout) => {
        const expected = '2020-11-07';
        if (err) throw err;
        const stringStdout = JSON.stringify(stdout);
        expect(stringStdout.includes(expected)).to.be.true;
        done();
      });
    });
  });
});
