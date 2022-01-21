const { join } = require('path');
const { ReadJson } = require('./ReadJson');

const coinsFile = join(__dirname, './', 'coin.json');
const methodsFile = join(__dirname, './', 'method.json');

const validInputCoin = async (inputCoin) => {
  const readJson = new ReadJson({ file: coinsFile });
  const res = await readJson.findAll();
  const { coins } = res;
  const valid = coins.some((elem) => elem.coin === inputCoin.toUpperCase());
  if (!valid) throw new Error('O argumento coin não é valido');
  return valid;
};

const validInputMethod = async (inputMethod) => {
  if (inputMethod === inputMethod.toUpperCase()) {
    throw new Error('Argumento -m está em maiusculo');
  }
  const readJson = new ReadJson({ file: methodsFile });
  const { method } = await readJson.findAll();
  const valid = method.some((elem) => elem.method === inputMethod);
  if (!valid) throw new Error('O argument methodo não corresponde');
  return valid;
};
module.exports = { validInputCoin, validInputMethod };
