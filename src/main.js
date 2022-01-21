#!/usr/bin/env node
const { program } = require('commander');

const pkg = require('../package.json');
const Service = require('./service');

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-c, --coin [string]', 'Digital currency acronym | Acrônimo da moeda digital [coin] ')
  .option('-m, --method [string] ', 'Método da API de Dados requisitado - " ticker, orderbook, trades "')
  .parse(process.argv);

const data = new Service();
const options = program.opts();
data.getDefault(options.coin, options.method).then(console.log);
