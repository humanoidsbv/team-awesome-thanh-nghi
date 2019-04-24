import { NewClientModel } from '../../components/new-client/NewClient';

const fetchUrl = 'http://localhost:4000/clients';

export const getClients = () => (
  fetch(fetchUrl)
    .then(response => response.json())
);

export const saveClient = (client: NewClientModel) => (
  fetch(fetchUrl, {
    method: 'POST',
    body: JSON.stringify(client),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
);
