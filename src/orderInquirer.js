const inquirer = require('inquirer');
const Service = require('./service');

const service = new Service();

const listCoin = ['btc', 'eth'];
const listMethod = ['ticker', 'orderbook', 'trades', 'day-summary'];

const question = [
  {
    type: 'list', name: 'coin', message: 'Escolha a criptomoeda', choices: listCoin,
  },
  {
    type: 'list', name: 'method', message: 'Escolha o metodo', choices: listMethod,
  },
  {
    type: 'confirm', name: 'output', message: 'Saída em JSON?',
  },

];

const order = () => {
  inquirer
    .prompt(question)
    .then((answers) => {
      service.getDefault(answers.coin, answers.method)
        .then(
          answers.output ? console.log : console.table,
        );
    });
};

module.exports = { order };
