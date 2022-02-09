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
    it('should retorn data tinker when commander cli-bitcoin tinker -c btc', (done) => {
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
    it('should retorn the helper of the ticker when comander cli-bitcoin orderbook --help', (done) => {
      exec(`${cliBitcoin} orderbook --help`, (err, stdout) => {
        if (err) throw err;
        const expected = 'Exemplo do comando orderbook';
        const expected2 = '$ cli-bitcoin orderbook';
        expect(stdout.includes(expected)).to.be.true;
        expect(stdout.includes(expected2)).to.be.true;

        done();
      });
    });
    it('should retorn data tinker when commander cli-bitcoin orderbook', (done) => {
      exec(`${cliBitcoin} orderbook`, (err, stdout) => {
        const expected = 'Preço';
        if (err) throw err;
        const stringStdout = JSON.stringify(stdout);
        expect(stringStdout.includes(expected)).to.be.true;
        done();
      });
    });
  });
  context('Command Trades', () => {
    it('should retorn the helper of the ticker when comander cli-bitcoin trades --help', (done) => {
      exec(`${cliBitcoin} trades --help`, (err, stdout) => {
        if (err) throw err;
        const expected = 'Exemplos do comando trades';
        const expected2 = 'cli-bitcoin trades';
        expect(stdout.includes(expected)).to.be.true;
        expect(stdout.includes(expected2)).to.be.true;
        done();
      });
    });
    it('should retorn data tinker when commander cli-bitcoin trades -C eth -f 1644270658 -hd', (done) => {
      exec(`${cliBitcoin} trades -c eth -f 1644270658 -hd`, (err, stdout) => {
        const expected = 'date: \'07/02/2022 | 21:51::44\'';
        if (err) throw err;
        const stringStdout = JSON.stringify(stdout);
        expect(stringStdout.includes(expected)).to.be.true;
        done();
      });
    });
    it('Shoul return current money for trades when commander cli-bitcoin trades -f 1644270658 -ft 1644270758 -hc', (done) => {
      exec(`${cliBitcoin} trades -f 1644270658 -ft 1644270758 -hc`, (err, stdout) => {
        const expected = '233.341,9261551';
        if (err) throw err;
        const stringStdout = JSON.stringify(stdout);
        expect(stringStdout.includes(expected)).to.be.true;
        done();
      });
    });
    it('Shoul return data for trades when commander cli-bitcoin trades -t 13025706', (done) => {
      exec(`${cliBitcoin} trades -t 13025706`, (err, stdout) => {
        const expected = 'tid: 13025707';
        if (err) throw err;
        const stringStdout = JSON.stringify(stdout);
        expect(stringStdout.includes(expected)).to.be.true;
        done();
      });
    });
    it('Shoul return data for trades when commander cli-bitcoin trades -s 13025706', (done) => {
      exec(`${cliBitcoin} trades -s 13025706`, (err, stdout) => {
        const expected = 'tid: 13025707';
        if (err) throw err;
        const stringStdout = JSON.stringify(stdout);
        expect(stringStdout.includes(expected)).to.be.true;
        done();
      });
    });
  });
  context('Command daySummary', () => {
    it('should retorn the helper of the ticker when comander cli-bitcoin day-summary --help', (done) => {
      exec(`${cliBitcoin} day-summary --help`, (err, stdout) => {
        if (err) throw err;
        const expected = 'Exemplos de day-summary';
        expect(stdout.includes(expected)).to.be.true;
        done();
      });
    });
    it('should retorn data tinker when commander cli-bitcoin day-summary 07 11 2020', (done) => {
      exec(`${cliBitcoin} day-summary 2020 11 07 -c eth`, (err, stdout) => {
        const expected = '2020-11-07';
        if (err) throw err;
        const stringStdout = JSON.stringify(stdout);
        expect(stringStdout.includes(expected)).to.be.true;
        done();
      });
    });
  });
});
