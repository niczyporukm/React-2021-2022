import { initialAirportsState } from "./initialState";

export const airportReducer = (state = initialAirportsState, action) => {
  switch (action.type) {
    case "SET_INITIAL_AIRPORTS_LIST":
      return { ...state, airports: action.value };
    case "SET_AIRPORTS_LOADING_STATE":
      return { ...state, airportsIsLoading: action.value };
    case "SET_AIRPORTS_LOADING_ERROR":
      return { ...state, loadingAirportsError: action.value };
    case "SET_SELECTED_AIRPORT":
      return { ...state, selectedAirport: action.value };
    case "REMOVE_AIRPORT_BY_ID":
      return {
        ...state,
        airports: state.airports.filter(
          (airport) => airport.id !== action.value
        ),
      };
    default:
      return state;
  }
};
