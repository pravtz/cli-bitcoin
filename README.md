# Cli Bitcoin

Search for cryptocurrency information

## 🖥  INSTALLING

To get a global install of the latest CLI release.

```bash
npm install -g cli-bitcoin

```
---
## Helpers | Description | Version
Command for help

```bash
cli-bitcoin --help
```

Command to see version

```bash
cli-bitcoin --version
```
Command to see the description

```bash
cli-bitcoin --description
```

---
## 💎 HOW TO USE
### Basic Command
With this simple command it is possible to choose the method and currency in a very simple and intuitive way
```bash
cli-bitcoin
```

#### Choose cryptocurrency

You can choose which cryptocurrency by passing a --coin \<ACRONYM> or -c \<ACRONYM> option. If no option is set by default and "btc".
[See all accepted currency acronym arguments here](doc/coin)


### Avanced Commands

For more advanced information, learn about the following methods:

* **TICKER**: Retorna informações com o resumo das últimas 24 horas de negociações. ___[Veja mais..](doc/ticker)___

* **ORDERBOOK**: Order book made up of sell and buy orders. ___[Veja mais..](doc/orderbook)___

* **TRADES**: Histórico de negociações realizadas. ___[Veja mais..](doc/trades)___

* **DAY SUMMARY**: Returns daily summary of trades performed. ___[Veja mais..](doc/day-summary)___

> USE:
>
> *$ cli-bitcoin \<methodo\> \[options\]*
>
>
> >  See the "--help" for each method to learn more about the options available.


```bash
# EXAMPLES
cli-bitcoin ticker --help

cli-bitcoin ticker -c eth

# OR

cli-bitcoin orderbook --help

cli-bitcoin orderbook -c btc

# OR

cli-bitcoin trades --help

cli-bitcoin trades

# OR

cli-bitcoin day-summary --help

cli-bitcoin day-summary

```









## Dependences used

   * commander
   * inquirer
   * request

## API used
The data is a result of the [Mercado Bitcoin](https://www.mercadobitcoin.com.br/api-doc) public API. The **CLI BITCOIN** only serves as a facilitator to access this data via the command line.

*


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
