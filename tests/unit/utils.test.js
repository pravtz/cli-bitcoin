const { describe, it } = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { ConvertDateToHuman } = require('../../utils/ConvertDate');
const { ConvertDateUnixNanoSegundToDateToHuman } = require('../../utils/ConvertDate');
const { formatBRL } = require('../../utils/ConvertMoney');

const { expect } = chai;
chai.use(chaiAsPromised);

describe('Util Suit Test', () => {
  context('ConvertDateToHuman - "utils/ConvertDate.js"', () => {
    it('converte a data para o formato dd/mm/yyyy | hh:mm::ss', () => {
      const result = ConvertDateToHuman(1642432412);
      const expected = '17/01/2022 | 15:13::32';
      expect(result).to.be.equal(expected);
    });
    it('should convert a data com duas unidades (ex: 01 ao inves de somente 1)', () => {
      const result = ConvertDateToHuman(1640998861);
      const expected = '01/01/2022 | 01:01::01';
      expect(result).to.be.equal(expected);
    });
    it('should convert a hours at 24 and no at 12 ', () => {
      const result = ConvertDateToHuman(1672531199);
      const expected = '31/12/2022 | 23:59::59';
      expect(result).to.be.equal(expected);
    });
    it('Should return an error when passing the date with the wrong format', () => {
      expect(() => (ConvertDateToHuman(16409988610))).to.throw('erro no formato da data');
    });
  });

  context('formatBRL - "utils/ConvertMoney.js"', () => {
    it('Convert epoch to human-readable current money', async () => {
      const value = 124587.55;
      const result = formatBRL(value).toString();
      const expected = 'R$ 124.587,55'.toString();

      expect(expected.slice(3)).to.be.eq(result.slice(3));
      expect(result).to.have.lengthOf(13);
    });
    it('should have at most eight digits after the comma ', () => {
      const value = 1.123456781;
      const result = formatBRL(value);
      const expected = 13;
      expect(result).to.have.lengthOf(expected);
    });
    it('should have at least two digits after the comma', () => {
      const value = 1.1;
      const result = formatBRL(value);
      const expected = 7;
      expect(result).to.have.lengthOf(expected);
    });
    it('should remove non-significant (zero) digits', () => {
      const value = 1.1000000;
      const result = formatBRL(value);
      const expected = 7;
      expect(result).to.have.lengthOf(expected);
    });
    it('should show R$ of the BRL currency', () => {
      const value = '1.1000000';
      const result = formatBRL(value).slice(0, 2);
      const expected = 'R$';

      expect(result).to.be.eq(expected);
    });
  });
  context('ConvertDateUnixNanoSegundToDateToHuman - "utils/ConvertDate.js', () => {
    it('Convert date of the nano secunds to epoch to human-readable in the format dd/mm/aaaa | HH:MM::SS.SSS', () => {
      const value = '1642432568578919260';
      const expected = ConvertDateUnixNanoSegundToDateToHuman(value);
      const result = '17/01/2022 | 15:16::08.578';
      expect(expected).to.be.equal(result);
    });
  });
});
