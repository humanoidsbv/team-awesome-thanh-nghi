import { dateToLocaleStringMonthYear, getDateToIso } from '../converter-time';

test('dateToLocaleStringMonthYear returns date input to locale date with the month and year', () => {
  const date = '2019-03-04T00:00:00.000Z';
  expect(dateToLocaleStringMonthYear(date)).toBe('March 2019');
});

test('getDateToIso returns date input to ISOstring', () => {
  const date = '20-03-2019';
  expect(getDateToIso(date)).toBe('2019-03-20T00:00:00.000Z');
});
