#!/usr/bin/env node
const { program } = require('commander');
const { order } = require('./orderInquirer');
const pkg = require('../package.json');
const Service = require('./service');

const service = new Service();

program
  .version(pkg.version)
  .description(pkg.description)
  .action(() => {
    order();
  })
  .addHelpText('after', `
  Examples:
    $ cli-bitcoin
    $ cli-bitcoin --help

    $ cli-bitcoin tinker
    $ cli-bitcoin tinker -c btc
    $ cli-bitcoin tinker --help

    $ cli-bitcoin trades
    $ cli-bitcoin trades --help

    $ cli-bitcoin orderbook
    $ cli-bitcoin orderbook --help

    $ cli-bitcoin day-summary
    $ cli-bitcoin day-summary --help
  `);

program
  .command('ticker [string]')
  .description('Retorna informações com o resumo das últimas 24 horas de negociações.')
  .option('-c, --coin [coin]', 'Acrônimo da moeda digital [coin] ')
  .option('-o --output [output]', 'output in the table') // json, table
  .option('-hd --human-date ', 'output human-readable date')
  .option('-hc --human-currency ', 'output human-readable currency')
  .action((test, options, command) => {
    const chosenOutput = command.opts().output === 'json' || command.opts().output === 'table' ? 'json' : 'text';
    return service.getTicker(
      command.opts().coin,
      command.opts().humanDate,
      command.opts().humanCurrency,
      chosenOutput,
    ).then(command.opts().output === 'table' ? console.table : console.log);
  })
  .addHelpText('after', `
  Examples:
    $ cli-bitcoin ticker
    $ cli-bitcoin ticker -c eth`);

program
  .command('orderbook [string]')
  .description('Livro de ofertas é composto por duas listas: (1) uma lista com as ofertas de compras ordenadas pelo maior valor; (2) uma lista com as ofertas de venda ordenadas pelo menor valor.')
  .option('-c, --coin [coin]', 'Acrônimo da moeda digital [coin] ')
  .option('-o, --output [output]', 'choise output| text <default> [json, table] ')
  .option('-hd --human-date ', 'output human-readable date')
  .option('-hc --human-currency ', 'output human-readable currency')
  .option('-of --offers [offers]', 'filter data | options are: "asks", "dids" and "full"')
  .action((test, options, command) => {
    const chosenOutput = command.opts().output === 'json' || command.opts().output === 'table' ? 'json' : 'text';
    return service.getOrderbook(
      command.opts().coin,
      command.opts().humanDate,
      command.opts().humanCurrency,
      chosenOutput,
      command.opts().offers,
    )
      .then(command.opts().output === 'table' ? console.table : console.log);
  })
  .addHelpText('after', `
  Conceito:
  Livro de ofertas é composto por duas listas:
    (1) uma lista com as ofertas de compras ordenadas pelo maior valor;
    (2) uma lista com as ofertas de venda ordenadas pelo menor valor.

  O livro mostra até 1000 ofertas de compra e até 1000 ofertas de venda.
  Uma oferta é constituída por uma ou mais ordens, sendo assim, a quantidade da oferta é o resultado da soma das quantidades das ordens de mesmo preço unitário. Caso uma oferta represente mais de uma ordem, a prioridade de execução se dá com base na data de criação da ordem, da mais antiga para a mais nova.

  Exemplo do comando orderbook:
    $ cli-bitcoin orderbook
    $ cli-bitcoin orderbook -c eth
    $ cli-bitcoin orderbook --help

  `);
program
  .command('trades [string]')
  .description('Histórico de negociações realizadas.')
  .option('-c, --coin [coin]', 'Acrônimo da moeda digital [coin] ')
  .option('-t, --tid [tid]', 'Tempo | Retorna até 1000 negociações a partir do identificador da negociação ')
  .option('-s, --since [since]', 'Desde | Retorna até 1000 negociações a partir do identificador da negociação ')
  .option('-f, --from [from]', 'Retorna até 1000 negociações a partir da data informada')
  .option('-ft, --fron-to [fromTo]', 'Retorna até 1000 negociações entre o intervalo de timestamp informado.')
  .option('-hd --human-date ', 'output human-readable date')
  .option('-hc --human-currency ', 'output human-readable currency')
  .action((test, options, command) => {
    const result = service.getTrades(
      command.opts().from,
      command.opts().fronTo,
      command.opts().tid,
      command.opts().since,
      command.opts().coin,
      command.opts().humanDate,
      command.opts().humanCurrency,
    );
    return result.then(console.log);
  })
  .addHelpText('after', `
  Exemplos do comando trades:

    $ cli-bitcoin trades
    $ cli-bitcoin trades -c eth
    $ cli-bitcoin trades -t 5700 -c eth
    $ cli-bitcoin trades -s 5700 -c eth
    $ cli-bitcoin trades -f 1501871369
    $ cli-bitcoin trades -ft 1501871369 1501891200
    $ cli-bitcoin trades --help

  `);

program
  .command('day-summary [date]')
  .description('Resumo diário de negociações realizadas')
  .option('-c, --coin [coin]', 'Acrônimo da moeda digital [coin] ')
  .action((test, options, command) => {
    const YearMouthDay = `${command.args[0]},${command.args[1]},${command.args[2]}`;
    const result = service.getDaySummary(YearMouthDay, command.opts().coin);
    return result.then(console.log);
  })
  .addHelpText('after', `
  Resumo diário de negociações realizadas.

  Após o comando day-summary e obrigatório passar três argumentos separados que referencia a data (ano mês dia)

  Exemplos de day-summary:

    $ cli-bitcoin trades 2020 11 15
    $ cli-bitcoin trades 2020 11 15 -c eth
    $ cli-bitcoin trades --help

  `);

program.parse(process.argv);
