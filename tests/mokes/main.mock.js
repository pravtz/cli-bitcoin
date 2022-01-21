const sinon = require('sinon');
const mokeTicker = require('./valid-ticker.json');
const mokeTrades = require('./valid-trades.json');
const mokeOrderbook = require('./valid-orderbook.json');
const mokeSaySummary = require('./valid-day-summary.json');
const Repository = require('../../src/repository');

const mock = {
  mokeTicker,
  mokeTrades,
  mokeOrderbook,
  mokeSaySummary,
};

const url = {
  ticker: 'https://www.mercadobitcoin.net/api/btc/ticker/',
  trades: 'https://www.mercadobitcoin.net/api/btc/trades/',
  orderbook: 'https://www.mercadobitcoin.net/api/btc/orderbook/',
  daySummary: 'https://www.mercadobitcoin.net/api/btc/day-summary/2013/06/20/',
};

const repositoryMock = new Repository();
const stub = sinon.stub(repositoryMock, 'makeRequest');

stub.withArgs(url.ticker).resolves(mock.mokeTicker);
stub.withArgs(url.trades).resolves(mock.mokeTrades);
stub.withArgs(url.orderbook).resolves(mock.mokeOrderbook);
stub.withArgs(url.daySummary).resolves(mock.mokeSaySummary);

module.exports = {
  repositoryMock,
  mock,
};
