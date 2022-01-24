const { describe, it } = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { ConvertDateToHuman } = require('../../utils/ConvertDate');

const { expect } = chai;
chai.use(chaiAsPromised);

describe('Util Suit Test', () => {
  context('Convert epoch to human-readable', () => {
    it('converte a data para o formato dd/mm/yyyy - hh:mm', () => {
      const result = ConvertDateToHuman(1642432412);
      const expected = '17/01/2022 - 15:13';
      expect(result).to.be.equal(expected);
    });
    it('should convert a data com duas unidades (ex: 01 ao inves de somente 1)', () => {
      const result = ConvertDateToHuman(1640998861);
      const expected = '01/01/2022 - 01:01';
      expect(result).to.be.equal(expected);
    });
    it('should convert a hora em 24 e não 12 ', () => {
      const result = ConvertDateToHuman(1672531199);
      const expected = '31/12/2022 - 23:59';
      expect(result).to.be.equal(expected);
    });
    it('Should return an error when passing the date with the wrong format', () => {
      expect(() => (ConvertDateToHuman(16409988610))).to.throw('erro no formato da data');
    });
  });
});
