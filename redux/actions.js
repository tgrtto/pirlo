import {
  LOAD_TRIPS
} from "./actionTypes";

export const loadTrips = (trips) => {
  return {
    type: LOAD_TRIPS,
    payload: {
      trips: trips
    }
  };
}
