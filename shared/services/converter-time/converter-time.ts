export function dateToLocaleString(date: string) {
  const newDate = new Date(date);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return newDate.toLocaleString('en-US', options);
}

export function dateToLocaleStringMonthYear(date: string) {
  const newDate = new Date(date);
  const options = { month: 'long', year: 'numeric' };
  return newDate.toLocaleString('en-NL', options);
}

export function getDateToIso(date: string) {
  const dateSplit = date.split('-').reverse().join('-');
  const dateToIso = new Date(dateSplit).toISOString();
  return dateToIso;
}

export function getDateTimeToIso(date: string, time: string) {
  const dateSplit = date.split('-').reverse().join('-');
  const dateTimeToIso = new Date(`
    ${dateSplit} ${time}
  `).toISOString();
  return dateTimeToIso;
}

export function timeToLocaleString(date: string) {
  const newDate = new Date(date);
  const options = { hour: '2-digit', minute: '2-digit', hour12: false };
  return newDate.toLocaleString('nl-NL', options);
}
