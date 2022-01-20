# cli-bitcoin

Search for cryptocurrency information

## RUM

To get a global install of the latest CLI release.

```bash
npm install -g cli-bitcoin

```
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

command Basic (Default: coin=btc and method=ticker)
With this command it is possible to see the summary of the last 24
hours of trading with bitcoin currency

```bash
cli-bitcoin
```


With "-m" it is possible to change the method of the main command
Para saver quais os medodos suportados [verifique aqui](doc/coin)
```bash
cli-bitcoin -m ticker
```

with -m it is possible to change the method of the main command
```bash
cli-bitcoin -c btc
```

The -m and -c command can be combined

```bash
cli-bitcoin -c btc -m ticker
```


#### Acronimos da moeda digital


### Ticker
Descrição: Retorna informações com o resumo das últimas 24 horas de negociações.

Resultado
 high: Maior preço unitário de negociação das últimas 24 horas.
Tipo: Decimal
 low: Menor preço unitário de negociação das últimas 24 horas.
Tipo: Decimal
 vol: Quantidade negociada nas últimas 24 horas.
Tipo: Decimal
 last: Preço unitário da última negociação.
Tipo: Decimal
 buy: Maior preço de oferta de compra das últimas 24 horas.
Tipo: Decimal
 sell: Menor preço de oferta de venda das últimas 24 horas.
Tipo: Decimal
 date: Data e hora da informação em Era Unix
Tipo: Inteiro
Exemplo de chamada:


### Orderbook
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

Exemplo de chamada:
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



### Trades
Descrição: Histórico de negociações realizadas.

Resultado
 []: Lista de negociações realizadas.
date: Data e hora da negociação em Era Unix
Tipo: Decimal
price: Preço unitário da negociação.
Tipo: Decimal
amount: Quantidade da negociação.
Tipo: Decimal
tid: Identificador da negociação.
Tipo: Inteiro
type: Indica a ponta executora da negociação
Tipo: String
Domínio de dados:
buy : indica ordem de compra executora
sell : indica ordem de venda executora
Exemplo de chamada:



## Dependesse


https://www.mercadobitcoin.com.br/api-doc/#glossario-era-unix
