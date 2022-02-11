# Cli-bitcoin

[⬅ back](../)

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
