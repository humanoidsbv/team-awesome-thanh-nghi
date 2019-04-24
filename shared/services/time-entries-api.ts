import { TimeEntryModel } from '../../ducks/time-entries';

const fetchUrl = 'http://localhost:4000/time-entries';

export const getTimeEntries = () => (
  fetch(fetchUrl)
    .then(response => response.json())
);

export const saveTimeEntry = (timeEntry: TimeEntryModel) => (
  fetch(fetchUrl, {
    method: 'POST',
    body: JSON.stringify(timeEntry),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
);

export const removeTimeEntry = (id: TimeEntryModel["id"]) => (
  fetch(`${fetchUrl}/${id}`, {
    method: 'DELETE'
  })
);
