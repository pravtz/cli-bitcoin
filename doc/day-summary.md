# Cli-bitcoin

[⬅ back](../)

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
[See all accepted currency acronym arguments here](doc/coin.md)
