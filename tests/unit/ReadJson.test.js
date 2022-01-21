const { describe, it } = require('mocha');
const { expect } = require('chai');
const { join } = require('path');
const { ReadJson } = require('../../validate/ReadJson');

const coin = join(__dirname, '../../validate', 'coin.json');

describe('ReadJson Suit Test', () => {
  it('should return the contents of the file in json', async () => {
    const readJson = new ReadJson({ file: coin });
    const res = await readJson.findAll();
    expect(res.coins[0].coin).to.be.equal('AAVE');
  });
});
