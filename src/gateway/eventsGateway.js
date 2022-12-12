const baseUrl = 'https://63949f6986829c49e8225bf8.mockapi.io/api/v1/events';

export const fetchEventsList = () => {
  return fetch(baseUrl)
    .then(response => {
      if (!response.ok) {
        alert("Internal Server Error. Can't display events GET");
      }
      return response.json();
    })
    .then(eventsList =>
      eventsList.map(event => ({
        ...event,
        dateFrom: new Date(event.dateFrom),
        dateTo: new Date(event.dateTo),
      })),
    );
};

export const createEvent = eventData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      alert("Internal Server Error. Can't display events POST");
    }
  });
};

export const deleteEvent = eventId => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      alert("Internal Server Error. Can't display events DELETE");
    }
  });
};
