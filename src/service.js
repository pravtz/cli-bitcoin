const Repository = require('./repository');
const { ConvertDateToHuman } = require('../utils/ConvertDate');

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

  async outputText(coin, method) {
    const { ticker } = await this.getDefault(coin, method);

    const dataHuman = ConvertDateToHuman(ticker.date);
    return `
      high: ${ticker.high}
      low: ${ticker.low}
      vol: ${ticker.vol}
      last: ${ticker.last}
      buy: ${ticker.buy},
      sell: ${ticker.sell},
      open: ${ticker.open},
      date: ${dataHuman}
    `;
  }
}
module.exports = Service;
