const { describe, it } = require('mocha');
const { expect } = require('chai');
const { repositoryMock, mock } = require('../mokes/main.mock');
const Service = require('../../src/service');

describe('Service Suit test', () => {
  const serviceMock = new Service(repositoryMock);

  it('should return the default object with no argument', async () => {
    const serviceMockTicker = await serviceMock.getDefault();
    expect(serviceMockTicker).to.be.equal(mock.mokeTicker);
  });

  it('should return the object with at least one of the arguments', async () => {
    const serviceMockTicker1 = await serviceMock.getDefault('btc');
    const serviceMockTicker2 = await serviceMock.getDefault('btc', 'trades');
    const serviceMockTicker3 = await serviceMock.getDefault('', 'orderbook');

    expect(serviceMockTicker1).to.be.equal(mock.mokeTicker);
    expect(serviceMockTicker2).to.be.equal(mock.mokeTrades);
    expect(serviceMockTicker3).to.be.equal(mock.mokeOrderbook);
  });

  it('should return the object when call getDataCuston', async () => {
    const serviceMockTraderCustonFrom = await serviceMock.getTrades('btc', 'trades', '1643020542', '1643020552');
    const serviceMockTraderCustonTid = await serviceMock.getTrades('btc', 'trades', '', '', '12930657');
    const serviceMockTraderCustonSince = await serviceMock.getTrades('btc', 'trades', '', '', '', '12930657');

    expect(serviceMockTraderCustonFrom).to.be.equal(mock.moketradesCustonFromAndFromTo);
    expect(serviceMockTraderCustonTid).to.be.equal(mock.moketradesCustonTid);
    expect(serviceMockTraderCustonSince).to.be.equal(mock.moketradesCustonSince);
  });

  it('should return text when call outputText function ', async () => {
    const outputTextCall = await serviceMock.outputText('btc', 'ticker');
    console.log(outputTextCall);
  });
});
