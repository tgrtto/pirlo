import { LOAD_TRIPS } from "../actionTypes";

const initialState = {
  trips: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_TRIPS:
      const { trips } = action.payload;
      return {...state, trips: trips};
    default:
      return state;
  }
}
