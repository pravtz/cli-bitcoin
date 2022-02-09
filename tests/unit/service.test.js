const { describe, it } = require('mocha');
const { expect } = require('chai');
const { repositoryMock, mock } = require('../mokes/main.mock');
const Service = require('../../src/service');

describe('Service Suit test', () => {
  const serviceMock = new Service(repositoryMock);
  context('command default', () => {
    it('should return the default object with no argument', async () => {
      const serviceMockTicker = await serviceMock.getDefault();
      expect(serviceMockTicker).to.be.equal(mock.mokeTicker);
    });

    it('should return the object with at least one of the arguments', async () => {
      const serviceMockTicker1 = await serviceMock.getDefault('btc');
      const serviceMockTicker2 = await serviceMock.getDefault('btc', 'trades');
      const serviceMockTicker3 = await serviceMock.getDefault('', 'orderbook');

      expect(serviceMockTicker1).to.be.equal(mock.mokeTicker);
      expect(serviceMockTicker2).to.be.equal(mock.mokeTrades);
      expect(serviceMockTicker3).to.be.equal(mock.mokeOrderbook);
    });
  });
  context('command trades', () => {
    it('should return trades between the informed date range', async () => {
      const serviceMockTraderCustonFrom = await serviceMock.getTrades('1643020542', '1643020552');
      expect(serviceMockTraderCustonFrom.toString())
        .to.be.eq(mock.moketradesCustonFromAndFromTo.toString());
    });
    it('should return negotiations from the informed date', async () => {
      const serviceMockTraderCustonFrom = await serviceMock.getTrades('1643020542');
      expect(serviceMockTraderCustonFrom.toString())
        .to.be.equal(mock.moketradesCustonFrom.toString());
    });
    it('should return trades from the tid identifier', async () => {
      const serviceMockTraderCustonTid = await serviceMock.getTrades('', '', '12930657');
      expect(serviceMockTraderCustonTid.toString())
        .to.be.equal(mock.moketradesCustonTid.toString());
    });
    it('should return trades from the since identifier', async () => {
      const serviceMockTraderCustonSince = await serviceMock.getTrades('', '', '', '12930657');
      expect(serviceMockTraderCustonSince.toString())
        .to.be.equal(mock.moketradesCustonSince.toString());
    });
    it('should return with the date in human format', async () => {
      const serviceMockTrader = await serviceMock.getTrades('', '', '', '', 'btc', true);
      const result = JSON.stringify(serviceMockTrader);
      const expected = '17/08/2017 | 18:15::41';
      expect(result.includes(expected)).to.be.true;
    });
    it('should return with the current money in human format', async () => {
      const serviceMockTrader = await serviceMock.getTrades('', '', '', '', 'btc', 'false', true);
      const result = JSON.stringify(serviceMockTrader);
      const expected = 'R$';
      expect(result.includes(expected)).to.be.true;
    });
  });

  context('command ticker', () => {
    it('should return the ticker command in text with the date and currency in human format', async () => {
      const GetTicker = await serviceMock.getTicker('btc', true, true);
      // the regex was needed because the "intl.NumberFormat" function
      // adds a space not a space character
      const regex = /([\r \n]+)/g; // remove newline and spaces
      const regex2 = /R\$./g; // removes R$ and anything in front
      const regex3 = /R\$/g; // remove R$
      const expedted = `high: R$ 242.497,25
                        low: R$ 235.500,00
                        vol: 18.12981398
                        last: R$ 235.502,72005
                        buy: R$ 235.502,72005
                        sell: R$ 235.736,94375
                        open: R$ 241.167,6166359
                        date: 17/01/2022 | 15:13::32`
        .replace(regex, '').replace(regex3, '');
      expect(GetTicker.replace(regex, '').replace(regex2, '')).to.be.equal(expedted);
    });
    it('should return json from data when called with argument output=json', async () => {
      const GetTicker = await serviceMock.getTicker('btc', false, false, 'json');
      const stringMokeGetTicker = JSON.stringify(GetTicker);
      const ticker = JSON.stringify(mock.mokeTicker.ticker);

      expect(stringMokeGetTicker).to.be.equal(ticker);
    });
  });
  context('command orderbook', () => {
    it('should return the orderbook command in text with the date and currency in human format', async () => {
      const orderbookDefault = await serviceMock.getOrderbook();
      const expected1 = 'Lista de ofertas de venda, ordenadas do menor para o maior preço:';
      const expected2 = 'Lista de ofertas de compras, ordenadas do maior para o menor preço:';
      const expected3 = 'Preço:';
      const expected4 = 'Quant.:';
      expect(orderbookDefault.includes(expected1)).to.be.true;
      expect(orderbookDefault.includes(expected2)).to.be.true;
      expect(orderbookDefault.includes(expected3)).to.be.true;
      expect(orderbookDefault.includes(expected4)).to.be.true;
    });
    it('should return the orderbook command in text with the currency in human format', async () => {
      const orderbookDefault = await serviceMock.getOrderbook('btc', false, true);
      const expected1 = '235.736,9143';
      expect(orderbookDefault.includes(expected1)).to.be.true;
    });
    it('should return the orderbook command in text with the date in human format', async () => {
      const orderbookDefault = await serviceMock.getOrderbook('btc', true, false);
      const expected1 = '17/01/2022 | 15:16::08.578';
      expect(orderbookDefault.includes(expected1)).to.be.true;
    });
    it('should return the orderbook command in text asks', async () => {
      const orderbookAsks = await serviceMock.getOrderbook('btc', false, false, 'text', 'asks');

      const notExpected = 'Lista de ofertas de compras, ordenadas do maior para o menor preço.';
      const expected = 'Lista de ofertas de venda, ordenadas do menor para o maior preço.';
      expect(orderbookAsks.includes(expected)).to.be.true;
      expect(orderbookAsks.includes(notExpected)).to.be.false;
    });
    it('should return the orderbook command in text bids', async () => {
      const orderbookDefault = await serviceMock.getOrderbook('btc', false, false, 'text', 'bids');
      const expected = 'Lista de ofertas de compras, ordenadas do maior para o menor preço.';
      const notExpected = 'Lista de ofertas de venda, ordenadas do menor para o maior preço.';
      expect(orderbookDefault.includes(expected)).to.be.true;
      expect(orderbookDefault.includes(notExpected)).to.be.false;
    });
    it('should receive data from asks in json when calling getOverbook with ask argument', async () => {
      const dataOrderbookMock = await serviceMock.getOrderbook('btc', false, false, 'json', 'asks');
      const stringOrderbookMock = JSON.stringify(dataOrderbookMock);
      const expected = '{"timestamp":1642432568578919200,"asks":[[235736.9143,0.82384],[235736.91503,0.00668208],';
      expect(stringOrderbookMock.includes(expected)).to.be.true;
    });
    it('should receive data from asks in json when calling getOverbook with bids argument', async () => {
      const dataOrderbookMock = await serviceMock.getOrderbook('btc', false, false, 'json', 'bids');
      const result = JSON.stringify(dataOrderbookMock);
      const expected = '{"timestamp":1642432568578919200,"bids":[[235561.27309,0.00963884],[235561.273,0.00112463]';
      expect(result.includes(expected)).to.be.true;
    });
    it('should receive data from asks when calling getOverbook', async () => {
      const dataOrderbookMock = await serviceMock.getOrderbook('btc', false, false, 'json');
      const result = JSON.stringify(dataOrderbookMock);
      const expectedWithTimestamp = '"timestamp":1642432568578919200,"';
      const expectedWithAsks = '"asks":[[235736.9143,0.82384],[235736.91503,0.00668208],';
      const expectedWithBids = '"bids":[[235561.27309,0.00963884],[235561.273,0.00112463]';
      expect(result.includes(expectedWithTimestamp)).to.be.true;
      expect(result.includes(expectedWithAsks)).to.be.true;
      expect(result.includes(expectedWithBids)).to.be.true;
    });
    it('should handle dates and currencies in json when called with asks argument', async () => {
      const dataOrderbookMock = await serviceMock.getOrderbook('btc', true, true, 'json', 'asks');
      const result = JSON.stringify(dataOrderbookMock);
      const expected = '{"timestamp":"17/01/2022 | 15:16::08.578","asks":[["R$';
      const noExpected = 'bids":[["R$';
      expect(result.includes(expected)).to.be.true;
      expect(result.includes(noExpected)).to.be.false;
    });
    it('should handle dates and currencies in json when called with bids argument', async () => {
      const dataOrderbookMock = await serviceMock.getOrderbook('btc', true, true, 'json', 'bids');
      const result = JSON.stringify(dataOrderbookMock);
      const expected = '{"timestamp":"17/01/2022 | 15:16::08.578","bids":[["R$';
      const noExpected = '"asks":[["R$';
      expect(result.includes(expected)).to.be.true;
      expect(result.includes(noExpected)).to.be.false;
    });
    it('should handle dates and currencies in json', async () => {
      const dataOrderbookMock = await serviceMock.getOrderbook('btc', true, true, 'json');
      const result = JSON.stringify(dataOrderbookMock);
      const expectedWithTimestamp = '"timestamp":"17/01/2022 | 15:16::08.578"';
      const expectedWithAsks = '"asks":[["R$';
      const expectedWithBids = '"bids":[["R$';
      expect(result.includes(expectedWithTimestamp)).to.be.true;
      expect(result.includes(expectedWithAsks)).to.be.true;
      expect(result.includes(expectedWithBids)).to.be.true;
    });
  });
  context('command day-summary', () => {
    it('should return the daily trades of the informed date', async () => {
      const daySummaryMoke = await serviceMock.getDaySummary('2013,06,20');

      expect(daySummaryMoke).to.be.equal(mock.mokeSaySummary);
    });
  });
});
