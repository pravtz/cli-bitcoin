# Cli-bitcoin

[⬅ voltar](../README)

## Trades

Descrição: Histórico de negociações realizadas.

### Result:


* ***date***: Data e hora da negociação;

* ***price***: Preço unitário da negociação;

* ***amount***: Quantidade da negociação;

* ***tid***: Identificador da negociação;

* ***type***: Indica a ponta executora da negociação.


### Domínio de dados:

buy : indica ordem de compra executora

sell : indica ordem de venda executora


### Examples:

```bash
$ cli-bitcoin trades -c btc

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
