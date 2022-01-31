const formatBRL = (currentMoney) => new Intl.NumberFormat(
  'pt-BR',
  {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  },
).format(currentMoney);

module.exports = { formatBRL };
