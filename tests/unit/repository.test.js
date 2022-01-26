const { describe, it } = require('mocha');
const { expect } = require('chai');
const { repositoryMock, mock } = require('../mokes/main.mock');

describe('Repository Suit Test', () => {
  it('should call the specified url when makeRequest is called', async () => {
    const result = await repositoryMock.makeRequest('https://www.mercadobitcoin.net/api/btc/ticker/');
    const expected = mock.mokeTicker;
    expect(result).to.be.equal(expected);
  });

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

  it('shold return an object when calling the getDataCuston with method argument is passad', async () => {
    expect(await repositoryMock.getDataCuston('btc/trades/1643020542/1643020552')).to.be.equal(mock.moketradesCustonFromAndFromTo);
    expect(await repositoryMock.getDataCuston('btc/trades/?tid=12930657')).to.be.equal(mock.moketradesCustonTid);
    expect(await repositoryMock.getDataCuston('btc/trades/?since=12930657')).to.be.equal(mock.moketradesCustonSince);
  });

  it('should return a day-sammary object when calling getDataDaySummary with its arguments', async () => {
    expect(await repositoryMock.getDataDaySummary('btc', '2013', '06', '20')).to.be.equal(mock.mokeSaySummary);
  });
});
