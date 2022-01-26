const https = require('https');

class Repository {
  // eslint-disable-next-line class-methods-use-this
  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      const chunks = [];
      https.get(url, (response) => {
        response.on('data', (data) => {
          chunks.push(data);
        });
        response.on('error', reject);
        response.on('end', () => {
          const data = Buffer.concat(chunks);
          resolve(JSON.parse(data));
        });
      });
    });
  }

  async getData(coin, method) {
    const Coin = coin || 'btc';
    const Method = method || 'ticker';
    const data = await this.makeRequest(`https://www.mercadobitcoin.net/api/${Coin}/${Method}/`);
    return data;
  }

  async getDataCuston(url) {
    const data = await this.makeRequest(`https://www.mercadobitcoin.net/api/${url}`);
    return data;
  }

  async getDataDaySummary(coin, year, month, day) {
    const data = await this.makeRequest(`https://www.mercadobitcoin.net/api/${coin}/day-summary/${year}/${month}/${day}/`);
    return data;
  }
}

module.exports = Repository;
