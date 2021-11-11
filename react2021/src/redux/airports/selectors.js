export const getAirportByIdSelector = (store, id) => {
  return store.airport.airports.find((airport) => airport.id === id);
};

export const getSelectedAirport = (store) => {
  return store.airport.selectedAirport;
};
