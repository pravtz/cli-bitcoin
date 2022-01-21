const { describe, it } = require('mocha');
const { expect } = require('chai');
const { repositoryMock, mock } = require('../mokes/main.mock');

describe('Repository Suit Test', () => {
  it('should return a tickers object when no arguments are passed to getData', async () => {
    const expected = mock.mokeTicker;
    const result = await repositoryMock.getData();

    expect(result).to.be.equal(expected);
  });

  it('should return an object when calling the getData with method argument is passed', async () => {
    expect(await repositoryMock.getData('btc', 'trades')).to.be.equal(mock.mokeTrades);
    expect(await repositoryMock.getData('btc', 'orderbook')).to.be.equal(mock.mokeOrderbook);
    expect(await repositoryMock.getData('btc', 'ticker')).to.be.equal(mock.mokeTicker);
  });

  it('should return a day-sammary object when calling getDataDaySummary with its arguments', async () => {
    expect(await repositoryMock.getDataDaySummary('btc', '2013', '06', '20')).to.be.equal(mock.mokeSaySummary);
  });
});
