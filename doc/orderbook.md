# Cli-bitcoin

[⬅ voltar](../)

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
