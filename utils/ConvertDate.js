const ConvertDateToHuman = (numberDate) => {
  if (numberDate.toString().length !== 10) {
    throw new Error('erro no formato da data');
  }

  const newNumberDate = (numberDate) * 1000;
  const newDate = new Date(newNumberDate);

  const day = (`0${newDate.getUTCDate()}`.slice(-2));
  const mounth = `0${newDate.getUTCMonth() + 1}`.slice(-2);
  const hours = `0${newDate.getUTCHours()}`.slice(-2);
  const minutes = `0${newDate.getUTCMinutes()}`.slice(-2);

  return `${day}/${mounth}/${newDate.getUTCFullYear()} - ${hours}:${minutes}`;
};
module.exports = { ConvertDateToHuman };
