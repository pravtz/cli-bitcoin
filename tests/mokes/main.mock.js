const sinon = require('sinon');
const mokeTicker = require('./valid-ticker.json');
const mokeTrades = require('./valid-trades.json');
const mokeOrderbook = require('./valid-orderbook.json');
const mokeSaySummary = require('./valid-day-summary.json');
const moketradesCustonFromAndFromTo = require('./valid-trades-custon-from-and-from-to.json');
const moketradesCustonFrom = require('./valid-trades-custon-from.json');
const moketradesCustonTid = require('./valied-trades-custon-tid.json');
const moketradesCustonSince = require('./valied-trades-custon-since.json');
const Repository = require('../../src/repository');

const mock = {
  mokeTicker,
  mokeTrades,
  mokeOrderbook,
  mokeSaySummary,
  moketradesCustonFromAndFromTo,
  moketradesCustonTid,
  moketradesCustonSince,
  moketradesCustonFrom,
};

const url = {
  ticker: 'https://www.mercadobitcoin.net/api/btc/ticker',
  trades: 'https://www.mercadobitcoin.net/api/btc/trades',
  orderbook: 'https://www.mercadobitcoin.net/api/btc/orderbook',
  daySummary: 'https://www.mercadobitcoin.net/api/btc/day-summary/2013/06/20/',
  tradesCustonFromAndFromTo: 'https://www.mercadobitcoin.net/api/btc/trades/1643020542/1643020552',
  tradesCustonFrom: 'https://www.mercadobitcoin.net/api/btc/trades/1643020542',
  tradesCustonTid: 'https://www.mercadobitcoin.net/api/btc/trades/?tid=12930657',
  tradesCustonSince: 'https://www.mercadobitcoin.net/api/btc/trades/?since=12930657',
};

const repositoryMock = new Repository();
const stub = sinon.stub(repositoryMock, 'makeRequest');

stub.withArgs(url.ticker).resolves(mock.mokeTicker);
stub.withArgs(url.trades).resolves(mock.mokeTrades);
stub.withArgs(url.orderbook).resolves(mock.mokeOrderbook);
stub.withArgs(url.daySummary).resolves(mock.mokeSaySummary);
stub.withArgs(url.tradesCustonFromAndFromTo).resolves(mock.moketradesCustonFromAndFromTo);
stub.withArgs(url.tradesCustonFrom).resolves(mock.moketradesCustonFrom);
stub.withArgs(url.tradesCustonTid).resolves(mock.moketradesCustonTid);
stub.withArgs(url.tradesCustonSince).resolves(mock.moketradesCustonSince);

module.exports = {
  repositoryMock,
  mock,
};
