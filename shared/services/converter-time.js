export function dateToLocaleString(date) {
  const newDate = new Date(date);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const localeDate = newDate.toLocaleString('nl-NL', options);
  return localeDate;
}

export function getDateToIso(date) {
  const dateSplit = date.split('-').reverse();
  const dateToIso = new Date(dateSplit).toISOString();
  return dateToIso;
}
