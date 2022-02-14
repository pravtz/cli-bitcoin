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
[See all accepted currency acronym arguments here](#list-acronym)


### Avanced Commands

For more advanced information, learn about the following methods:

* **TICKER**: Returns information with the summary of the last 24 hours of trading. ___[Veja mais..](#ticker)___

* **ORDERBOOK**: Order book made up of sell and buy orders. ___[Veja mais..](#orderbook)___

* **TRADES**: History of trades carried out. ___[Veja mais..](#trades)___

* **DAY SUMMARY**: Returns daily summary of trades performed. ___[Veja mais..](#day-summary)___

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

  $ cli-bitcoin trades

  $ cli-bitcoin trades -c eth

  $ cli-bitcoin trades -t 5700 -c eth

  $ cli-bitcoin trades -s 5700 -c eth

  $ cli-bitcoin trades -f 1501871369

  $ cli-bitcoin trades -ft 1501871369 1501891200

  $ cli-bitcoin trades --help

# OR

cli-bitcoin day-summary --help

cli-bitcoin day-summary 2020 11 31 -c eth

```


## Methods
---
## Ticker

### Description:
Returns information with the summary of the last 24 hours of trading.



### Result:

 * ***high***: Highest trading unit price in the last 24 hours.

 * ***low***: Lowest unit trading price in the last 24 hours.

 * ***vol***: Amount traded in the last 24 hours.

 * ***last***: Unit price of the last negotiation.

 * ***buy***: Highest bid price in the last 24 hours.

 * ***sell***: Lowest bid price in the last 24 hours.

 * ***date***: Date


### Example:

```bash
# EXAMPLES
cli-bitcoin ticker --help

cli-bitcoin ticker -c eth
```
---

## OrderBook


Descrição: Livro de ofertas é composto por duas listas:
- (1) uma lista com as ofertas de compras ordenadas pelo maior valor;
- (2) uma lista com as ofertas de venda ordenadas pelo menor valor.

O livro mostra até 1000 ofertas de compra e até 1000 ofertas de venda.

Uma oferta é constituída por uma ou mais ordens, sendo assim, a quantidade da oferta é o resultado da soma das quantidades das ordens de mesmo preço unitário. Caso uma oferta represente mais de uma ordem, a prioridade de execução se dá com base na data de criação da ordem, da mais antiga para a mais nova.


- bids: Lista de ofertas de compras, ordenadas do maior para o menor preço.
  * [0]: Preço unitário da oferta de compra.
  * [1]: Quantidade da oferta de compra.
- asks: Lista de ofertas de venda, ordenadas do menor para o maior preço.
  * [0]: Preço unitário da oferta de venda.
  * [1]: Quantidade da oferta de venda.

Example Command:
```bash
# EXAMPLES


cli-bitcoin orderbook --help

cli-bitcoin orderbook -c btc


```

Example output:
```json
{
    "asks": [
        [10410.00006000, 2.09190016],
        [10420.00000000, 0.00997000],
        [10488.99999000, 0.46634897]
    ],
    "bids": [
        [10405.38258000, 0.00181000],
        [10393.84180000, 0.08387000]
    ]
}
```

---
## Trades

**Description:** History of trades carried out.

### Result:


* ***date***: Trading date and time;

* ***price***: Trading unit price;

* ***amount***: Trading amount;

* ***tid***: trade identifier;

* ***type***: Indicates the executing end of the negotiation.


### data domain:

buy : indicates executing purchase order

sell : indicates executing sell order

## options
```
  -c, --coin [coin]        Acrônimo digital [coin]
  -t, --tid [tid]          Time | Returns up to 1000 trades from the trade identifier
  -s, --since [since]      Desde | Returns up to 1000 trades from the trade identifier
  -f, --from [from]        Returns up to 1000 trades from the given date
  -ft, --fron-to [fromTo]  Returns up to 1000 trades between the given timestamp range.
  -hd --human-date         output human-readable date
  -hc --human-currency     output human-readable currency
  -h, --help               display help for command
```

The "--from" and "--from" to arguments must be passed in unix date format representing the number of seconds from January 1, 1970. It is a time with no time zone or daylight saving time variations, so it uses only UTC /GMT, read more at: https://pt.wikipedia.org/wiki/Era_Unix. To convert, a good idea is to use the site http://www.epochconverter.com.

### Examples:

```bash
  $ cli-bitcoin trades

  $ cli-bitcoin trades -c eth

  $ cli-bitcoin trades -t 5700 -c eth

  $ cli-bitcoin trades -s 5700 -c eth

  $ cli-bitcoin trades -f 1501871369

  $ cli-bitcoin trades -ft 1501871369 1501891200

  $ cli-bitcoin trades --help

```

```bash
# rerult simplify fake:

[
  {
    amount: 0.00066,
    date: 1644555481,
    price: 227982.36604,
    tid: 13051699,
    type: 'sell'
  },

# ... continua...

  {
    amount: 0.00378864,
    date: 1644563106,
    price: 228353.20682001,
    tid: 13051798,
    type: 'sell'
  },
#  ... 998 more items
]
```
---
## Day Summary

Description: Returns daily summary of trades performed.


Result


* **date**: Daily summary date (format: AAAA-MM-DD, example: 2013-06-20)

* **opening**: Unit price for opening trading on the day.

* **closing**: Unit price at the close of trading on the day.

* **lowest**: Lowest trading unit price on the day.

* **highest**: Highest unit trading price on the day.

* **volume**: Volume of Reais (BRL) traded on the day.

* **quantity**: Amount of digital currency traded on the day.

* **amount**: Number of trades carried out on the day.

* **avg_price**: Average unit price of trading on the day.

## how to use

$ cli-bitcoin day-summary \<year> \<mouth> \<day>

> Command arguments 'year', 'month' and 'day' are required


```bash
  $ cli-bitcoin trades 2020 11 15 -c eth
```

## options

```
Options:
  -c, --coin [coin]  Acrônimo da moeda digital [coin]
  -h, --help         display help for command
```

 You can choose which cryptocurrency by passing a --coin \<ACRONYM> or -c \<ACRONYM> option. If no option is set by default and "btc".
[See all accepted currency acronym arguments here](#list-acronym)

---

## List Acronym

| ACRONYM | CURRENCY |
|-----------------|-----------------|
| AAVE | Aave |
| ACMFT | AC Milan |
| ACORDO01 | None |
| ADA | Cardano |
| ALCX | Alchemix |
| ALGO | Algorand |
| ALICE | MyNeighborAlice |
| ALLFT | Alliance |
| AMFT | Aston Martin Cognizant |
| AMP | Amp |
| ANKR | ANKR |
| ARGFT | Argentine Football Association |
| ASRFT | AS Roma |
| ATMFT | Fan Token ATM |
| ATOM | Cosmos |
| AUDIO | Audius |
| AVAX | Avalanche |
| AXS | Axie Infinity |
| BAL | Balancer |
| BAND | Band Protocol |
| BARFT | FC Barcelona |
| BAT | Basic Attention token |
| BCH | Bitcoin Cash |
| BLZ | Bluzelle |
| BNT | BANCOR |
| BTC | Bitcoin |
| CAIFT | Fan Token CAI |
| CHZ | Chiliz |
| CITYFT | Manchester City FC |
| COMP | Compound |
| CRV | Curve Dao Token |
| CTSI | Cartesi |
| CVX | Convex Finance |
| DAI | Dai |
| DOGE | Dogecoin |
| DOT | Polkadot |
| DYDX | dYdX |
| ENJ | Enjin Coin |
| ENS | Ethereum Name Service |
| ETH | Ethereum |
| FET | Fetch.ai |
| FIL | Filecoin |
| FLOKI | Floki Inu |
| GALA | Gala |
| GALFT | Galatasaray |
| GALOFT | Clube Atletico Mineiro |
| GNO | Gnosis |
| GODS | Gods Unchained |
| GRT | The Graph |
| ICP | Internet Computer |
| IMOB01 | None |
| IMOB02 | None |
| IMX | Immutable X' |
| INTERFT | Inter Milan |
| JUVFT | Juventus |
| KNC | Kyber Network |
| KP3R | Keep3rV1 |
| LINK | Chainlink |
| LPT | Livepeer |
| LRC | Loopring |
| LTC | Litecoin |
| MANA | MANA (Decentraland) |
| MATIC | Polygon |
| MBCCSH01 | Consorcio H01 |
| MBCCSH02 | Consorcio H02 |
| MBCONS01 | Cota de Consórcio 01 |
| MBCONS02 | Cota de Consórcio 02 |
| MBFP01 | None |
| MBFP02 | None |
| MBFP03 | None |
| MBFP04 | None |
| MBFP05 | None |
| MBPRK01 | Precatório MB SP01 |
| MBPRK02 | Precatório MB SP02 |
| MBPRK03 | Precatório MB BR03 |
| MBPRK04 | Precatório MB RJ04 |
| MBPRK05 | Fluxo de Pagamentos 5 |
| MBPRK06 | Precatorio MB BR06 |
| MBSANTOS01 | Token da Vila |
| MBVASCO01 | Vasco Token |
| MC | Merit Circle |
| MCO2 | Moss Carbon Credit |
| MENGOFT | Flamengo |
| MIR | Mirror Protocol |
| MKR | Maker |
| NAVIFT | Natus Vincere |
| OGFT | OG eSports |
| OMG | Omg Network |
| OXT | Orchid |
| PAXG | PAX Gold |
| PFLFT | Professional Fighters League |
| PLA | PlayDapp |
| POLS | Polkastarter |
| PORFT | Portugal National Team FT |
| PSGFT | Paris Saint-Germain |
| QNT | Quant |
| RACA | Radio Caca |
| RAD | Radicle |
| REN | Ren |
| REQ | Request |
| SAND | The Sandbox |
| SAUBERFT | Alfa Romeo Racing ORLEN |
| SCCPFT | Corinthians |
| SHIB | Shiba Inu |
| SLP | Smooth Love Potion |
| SNX | Synthetix |
| SOL | Solana |
| SPELL | Spell Token |
| SPFCFT | SPFC |
| STVFT | Sint-Truidense Voetbalvereniging |
| SUPER | SuperFarm |
| SUSHI | SushiSwap |
| THFT | Team Heretics |
| UFCFT | UFC |
| UMA | Uma |
| UNI | Uniswap |
| USDC | USD Coin |
| USDP | Pax Dollar |
| VSPRK01 | Precatorio VS SP01 |
| WBTC | Wrapped Bitcoin |
| WBX | WiBX |
| WLUNA | Wrapped LUNA Token |
| XLM | Stellar |
| XRP | XRP |
| XTZ | Tezos |
| YBOFT | BSC Young Boys |
| YFI | yearn.finance |
| YGG | Yield Guild Games |
| ZRX | 0x |


---

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
