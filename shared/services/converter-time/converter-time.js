export function dateToLocaleString(isoDate) {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat('nl-NL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
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
