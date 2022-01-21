const Repository = require('./repository');

class Service {
  constructor(RepositoryMock) {
    this.repository = RepositoryMock || new Repository();
  }

  async getDefault(coin, method) {
    const r = await this.repository.getData(coin, method);
    return r;
  }
}
module.exports = Service;
