const fetchUrl = 'http://localhost:4000/clients';

export const getClients = () => (
  fetch(fetchUrl)
    .then(response => response.json())
);

export const saveClient = client => (
  fetch(fetchUrl, {
    method: 'POST',
    body: JSON.stringify(client),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
);
