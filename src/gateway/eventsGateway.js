const baseUrl = 'https://63949f6986829c49e8225bf8.mockapi.io/api/v1/event';

const handleNetworkError = () => {
  alert("Network Error. Can't display events");
  return [];
};

export const fetchEventsList = () => {
  return fetch(baseUrl)
    .then(response => {
      if (!response.ok) {
        alert("Error. Can't display events");
        return [];
      }
      return response.json();
    })
    .catch(handleNetworkError);
};

export const createEvent = eventData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  })
    .then(response => {
      if (!response.ok) {
        alert("Error. Can't create events");
        return [];
      }
      return response.json();
    })
    .catch(handleNetworkError);
};

export const deleteEvent = eventId => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        alert("Error. Can't delete events");
        return [];
      }
      return response.json();
    })
    .catch(handleNetworkError);
};
