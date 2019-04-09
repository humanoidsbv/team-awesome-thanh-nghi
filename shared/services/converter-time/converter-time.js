export function dateToLocaleString(date) {
  const newDate = new Date(date);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return newDate.toLocaleString('nl-NL', options);
}

export function dateToLocaleStringMonthYear(date) {
  const newDate = new Date(date);
  const options = { month: 'long', year: 'numeric' };
  return newDate.toLocaleString(navigator.language, options);
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
  const options = { hour: '2-digit', minute: '2-digit' };
  return newDate.toLocaleString('nl-NL', options);
}
