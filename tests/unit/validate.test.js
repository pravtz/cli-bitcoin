const { describe, it } = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const { expect } = chai;
chai.use(chaiAsPromised);

const { validInputCoin, validInputMethod } = require('../../validate/validate');

describe('Validate suit test', () => {
  it('should check if the argument exists in the coins list', async () => {
    const inputCoinTrue = 'btc';
    const resultTrue = await validInputCoin(inputCoinTrue);
    expect(resultTrue).to.be.true;
  });
  it('should return the correct error response (coin)', async () => {
    await expect(validInputCoin('anyware'))
      .to.be.rejectedWith('O argumento coin não é valido');
  });

  it('should check if the argument exists in the methods list', async () => {
    const inputCoinTrue = 'trades';
    const resultTrue = await validInputMethod(inputCoinTrue);

    expect(resultTrue).to.be.true;
  });

  it('should return the correct error response (method)', async () => {
    const inputCoinFalse = 'anyware';
    await expect(validInputMethod(inputCoinFalse))
      .to.be.rejectedWith('O argument methodo não corresponde');
  });

  it('should check if the argument is lowerCase', async () => {
    const inputCoinFalse = 'TRADES';
    await expect(validInputMethod(inputCoinFalse))
      .to.rejectedWith('Argumento -m está em maiusculo');
  });
});
