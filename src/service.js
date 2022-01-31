const Repository = require('./repository');
const { ConvertDateToHuman, ConvertDateUnixNanoSegundToDateToHuman } = require('../utils/ConvertDate');
const { formatBRL } = require('../utils/ConvertMoney');

class Service {
  constructor(RepositoryMock) {
    this.repository = RepositoryMock || new Repository();
  }

  async getDefault(coin, method) {
    const r = await this.repository.getData(coin, method);
    return r;
  }

  async getTrades(coin, method, from, fromTo, tid, since) {
    const ifFrom = from ? `/${from}` : '';
    const ifFromTo = fromTo ? `/${fromTo}` : '';
    const ifTid = tid && !since ? `/?tid=${tid}` : '';
    const ifSince = since && !tid ? `/?since=${since}` : '';

    const url = `${coin}/${method}${ifFrom}${ifFromTo}${ifTid}${ifSince}`;
    const r = await this.repository.getDataCuston(url);
    return r;
  }

  async getOrderbook(coin = 'btc', isDateToHuman = false, isFormatToHuman = false, output = 'text', offers = 'full') {
    const orderbookFull = await this.repository.getData(coin, 'orderbook');
    const { asks, bids, timestamp } = orderbookFull;

    if (output === 'json') {
      if (offers === 'asks') {
        const jasks = asks.map((ask) => [
          isFormatToHuman ? formatBRL(ask[0]) : ask[0],
          ask[1],
        ]);
        return {
          timestamp: isDateToHuman ? ConvertDateUnixNanoSegundToDateToHuman(timestamp) : timestamp,
          asks: jasks,
        };
      }
      if (offers === 'bids') {
        const jbids = bids.map((bid) => [
          isFormatToHuman ? formatBRL(bid[0]) : bid[0],
          bid[1],
        ]);
        return {
          timestamp: isDateToHuman ? ConvertDateUnixNanoSegundToDateToHuman(timestamp) : timestamp,
          bids: jbids,
        };
      }
      const jasks = asks.map((ask) => [
        isFormatToHuman ? formatBRL(ask[0]) : ask[0],
        ask[1],
      ]);
      const jbids = bids.map((bid) => [
        isFormatToHuman ? formatBRL(bid[0]) : bid[0],
        bid[1],
      ]);

      return {
        timestamp: isDateToHuman ? ConvertDateUnixNanoSegundToDateToHuman(timestamp) : timestamp,
        asks: jasks,
        bids: jbids,
      };
    }

    if (output === 'text' && offers === 'asks') {
      const r = asks.map((ask) => `
        Preço:\t${isFormatToHuman ? formatBRL(ask[0]) : ask[0]}
        Quant.:\t${ask[1]}`);
      return `
      Lista de ofertas de venda, ordenadas do menor para o maior preço.
      ${isDateToHuman ? ConvertDateUnixNanoSegundToDateToHuman(timestamp) : timestamp}
      ${r}
      `;
    }
    if (output === 'text' && offers === 'bids') {
      const r = bids.map((bid) => `
        Preço:\t${isFormatToHuman ? formatBRL(bid[0]) : bid[0]}
        Quant.:\t${bid[1]}`);
      return `
      Lista de ofertas de compras, ordenadas do maior para o menor preço.
      ${isDateToHuman ? ConvertDateUnixNanoSegundToDateToHuman(timestamp) : timestamp}
      ${r}
      `;
    }
    const rAsks = asks.map((ask) => `\nPreço: ${isFormatToHuman ? formatBRL(ask[0]) : ask[0]} | Quant.: ${ask[1]}`);
    const rBids = bids.map((bid) => `\nPreço: ${isFormatToHuman ? formatBRL(bid[0]) : bid[0]} | Quant.: ${bid[1]}`);
    return `
    ${isDateToHuman ? ConvertDateUnixNanoSegundToDateToHuman(timestamp) : timestamp}
    Lista de ofertas de venda, ordenadas do menor para o maior preço:
    ${rAsks}

    ${isDateToHuman ? ConvertDateUnixNanoSegundToDateToHuman(timestamp) : timestamp}
    Lista de ofertas de compras, ordenadas do maior para o menor preço:
    ${rBids}
    `;
  }

  async getTicker(coin = 'btc', isDateToHuman = false, isFormatToHuman = false, output = 'text') {
    const { ticker } = await this.repository.getData(coin, 'ticker');
    if (output === 'json') {
      return {
        high: isFormatToHuman ? formatBRL(ticker.high) : ticker.high,
        low: isFormatToHuman ? formatBRL(ticker.low) : ticker.low,
        vol: ticker.vol,
        last: isFormatToHuman ? formatBRL(ticker.last) : ticker.last,
        buy: isFormatToHuman ? formatBRL(ticker.buy) : ticker.buy,
        sell: isFormatToHuman ? formatBRL(ticker.sell) : ticker.sell,
        open: isFormatToHuman ? formatBRL(ticker.open) : ticker.open,
        date: isDateToHuman ? ConvertDateToHuman(ticker.date) : ticker.date,
      };
    }
    return `
      high: ${isFormatToHuman ? formatBRL(ticker.high) : ticker.high}
      low: ${isFormatToHuman ? formatBRL(ticker.low) : ticker.low}
      vol: ${ticker.vol}
      last: ${isFormatToHuman ? formatBRL(ticker.last) : ticker.last}
      buy: ${isFormatToHuman ? formatBRL(ticker.buy) : ticker.buy}
      sell: ${isFormatToHuman ? formatBRL(ticker.sell) : ticker.sell}
      open: ${isFormatToHuman ? formatBRL(ticker.open) : ticker.open}
      date: ${isDateToHuman ? ConvertDateToHuman(ticker.date) : ticker.date}
    `;
  }
}
module.exports = Service;
