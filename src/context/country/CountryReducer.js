import { SEARCH_COUNTRY, GET_COUNTRY, SET_LOADING } from "../Types";

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
        loading: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        countries: action.payload,
        loading: null,
      };
    default:
      return state;
  }
};
