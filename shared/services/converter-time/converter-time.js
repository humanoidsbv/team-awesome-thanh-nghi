import moment from 'moment';

export function dateFormatted(date) {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const dayTwoDigit = day < 10 ? `0${day}` : day;
  const month = newDate.getMonth() + 1;
  const monthTwoDigit = month < 10 ? `0${month}` : month;
  const year = newDate.getFullYear();
  return `${dayTwoDigit}-${monthTwoDigit}-${year}`;
}

export function dateToLocaleString(date) {
  const newDate = new Date(date);
  const dateFormat = moment(newDate).format('DD-MM-YYYY');
  return dateFormat;
}

export function dateToLocaleStringMonthYear(date) {
  const newDate = new Date(date);
  const options = { month: 'long', year: 'numeric' };
  return newDate.toLocaleString('en-NL', options);
}

export function getDateToIso(date) {
  const dateSplit = date.split('-').reverse().join('-');
  const dateToIso = new Date(dateSplit).toISOString();
  return dateToIso;
}

export function getDateTimeToIso(date, time) {
  const dateSplit = date.split('-').reverse().join('-');
  const dateTimeToIso = new Date(`
    ${dateSplit} ${time}
  `).toISOString();
  return dateTimeToIso;
}

export function timeToLocaleString(date) {
  const newDate = new Date(date);
  const options = { hour: '2-digit', minute: '2-digit', hour12: false };
  return newDate.toLocaleString('nl-NL', options);
}
