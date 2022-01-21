const { readFile } = require('fs/promises');

class ReadJson {
  constructor({ file }) {
    this.file = file;
  }

  async currentFileContent() {
    return JSON.parse(await readFile(this.file));
  }

  async findAll() {
    const all = await this.currentFileContent();
    return all;
  }
}
module.exports = { ReadJson };
